import Word from "./Img/word.png";
import Excel from "./Img/excel.png";
import Powerpoint from "./Img/powerpoint.png";
import Iword from "./Img/iWord.png";
import Jpg from "./Img/jpg.png";
import Ebook from "./Img/ebook.png";

const Files = [
    {
        id: 1,
        img: Word,
        label: "word",
        titleT: "word to pdf",
        titleF: "pdf to word",
        file: ".doc",
        filePdf: ".ppt, .pptx",
        color: "#1565C0" 
    },
    {
        id: 2,
        img: Excel,
        label: "excel",
        titleT: "excel to pdf",
        titleF: "pdf to excel",
        filePdf: ".ppt, .pptx",
        file: ".csv, .xls, .xlsb, .xlt, .xltx, .xlsx",
        color: "#2E7D32" 
    },
    {
        id: 3,
        img: Powerpoint,
        label: "powerpoint",
        titleT: "PowerPoint to pdf",
        titleF: "pdf to PowerPoint",
        filePdf: ".ppt, .pptx",
        file: ".pot, .potx, .pps, .ppsx, .ppt, .pptx",
        color: "#FF5722" 
    },
    {
        id: 4,
        img: Jpg,
        label: "jpg",
        titleT: "JPG to pdf",
        titleF: "pdf to JPG",
        file: "image/*",
        filePdf: ".ppt, .pptx",
        color: "#26B99A" 
    },
    {
        id: 5,
        img: Iword,
        label: "iword",
        titleT: "iWord to pdf",
        titleF: "pdf to iWord",
        file: ".key, .numbers, .pages",
        filePdf: ".ppt, .pptx",
        color: "#05CDFF" 
    },
    {
        id: 6,
        img: Ebook,
        label: "ebook",
        titleT: "eBooks to pdf",
        titleF: "pdf to eBooks",
        file: ".azv, .azv1, .azv3, .azv4, .epub, .mobi, .prc, .tpz, .lit, .cbz, .cbr, .cbc, .chm, .djvu, .lrf, .prc, .pml, .snb, .tcr",
        filePdf: ".ppt, .pptx",
        color: "#F55A8E"  
    },
]

export default Files;