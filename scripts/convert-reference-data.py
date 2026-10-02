"""Convert downloaded official growth references to compact, checked-in LMS JSON.
Usage: python scripts/convert-reference-data.py cdc-bmi.csv boys.xlsx girls.xlsx
Requires openpyxl. This script reads local files and makes no network requests.
"""
import csv, hashlib, json, sys
from pathlib import Path
import openpyxl

if len(sys.argv) != 4:
    raise SystemExit(__doc__)
out = Path(__file__).resolve().parents[1] / 'src/lib/reference-data'
cdc_path, boys_path, girls_path = map(Path, sys.argv[1:])
rows = {'1': [], '2': []}
for row in csv.reader(cdc_path.read_text().splitlines()):
    if not row or row[0] not in ('1', '2'):
        continue
    rows[row[0]].append([float(v) for v in row[1:5]])
assert all(len(v) == 219 for v in rows.values())
(out/'cdc-bmi.csv').write_bytes(cdc_path.read_bytes())
(out/'cdc-bmi.json').write_text(json.dumps(rows, separators=(',', ':')))
for sex, input_path in [('boys', boys_path), ('girls', girls_path)]:
    sheet = openpyxl.load_workbook(input_path, read_only=True, data_only=True).active
    data = [[int(r[0]), *map(float, r[1:4])] for r in sheet.iter_rows(min_row=2, values_only=True) if isinstance(r[0], (int, float))]
    assert all(row[0] == i for i, row in enumerate(data))
    assert len(data) >= 1827
    # Store official rows; calculator exposes only completed days 0–1826.
    (out/f'who-weight-{sex}.json').write_text(json.dumps(data, separators=(',', ':')))
for name in ['cdc-bmi.csv', 'cdc-bmi.json', 'who-weight-boys.json', 'who-weight-girls.json']:
    print(name, hashlib.sha256((out/name).read_bytes()).hexdigest())
