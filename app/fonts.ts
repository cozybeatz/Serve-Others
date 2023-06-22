import { Plus_Jakarta_Sans, Darker_Grotesque, Manrope, DM_Sans } from "next/font/google";

const plus_jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: '--font-plus_jakarta', });
const grotesque = Darker_Grotesque({ subsets: ["latin"], variable: '--font-grotesque', });
const manrope = Manrope({ subsets: ["latin"], variable: '--font-manrope', });
const dm_sans = DM_Sans({weight: ["400", "500", "700"], subsets: ['latin']});

export { plus_jakarta, grotesque, manrope, dm_sans}