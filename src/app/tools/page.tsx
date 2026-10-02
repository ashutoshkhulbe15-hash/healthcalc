import type {Metadata} from "next";
import ToolsDirectory from "./ToolsDirectory";
export const metadata:Metadata={title:"All Health Tools and Guides",description:"Browse ProHealthIt calculators and educational guides for fitness, body metrics, pregnancy, mental health and conditions.",alternates:{canonical:"/tools"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "All Health Tools and Guides", description: "Browse ProHealthIt calculators and educational guides for fitness, body metrics, pregnancy, mental health and conditions.", url: "/tools", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"All Health Tools and Guides", description:"Browse ProHealthIt calculators and educational guides for fitness, body metrics, pregnancy, mental health and conditions.", images:["/og-image.png"]},
};
export default function Page(){return <ToolsDirectory/>;}
