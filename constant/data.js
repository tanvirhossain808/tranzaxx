import realState from "../assets/images/home/categoreis/real-state.png"
import automobile from "../assets/images/home/categoreis/automobile.png"
import electornic from "../assets/images/home/categoreis/electronic.png"
import animal from "../assets/images/home/categoreis/pet.png"
import fashion from "../assets/images/home/categoreis/fashion.png"
import jobs from "../assets/images/home/categoreis/jobs.png"
import services from "../assets/images/home/categoreis/service.png"
import books from "../assets/images/home/categoreis/books.png"
import furniture from "../assets/images/home/categoreis/furniture.png"
import Beauty from "../assets/images/home/categoreis/beauty.png"
import gaming from "../assets/images/home/categoreis/gaming.png"
import car from "../assets/images/home/FeatureAds/car.png"
import tesyeusye from "../assets/images/home/FeatureAds/Tesyeusye.png"
import house from "../assets/images/home/FeatureAds/house.png"
import mike from "../assets/images/home/footer/mike.png"
import seller from "../assets/images/home/footer/seller.png"
import location from "../assets/images/home/footer/location.png"
import eyeIcon from "../assets/images/form/eye.png"
import lock from "../assets/images/form/lock.png"
import email from "../assets/images/form/email.png"
import phone from "../assets/images/form/phone.png"
import country from "../assets/images/form/country.png"
import men from "../assets/images/form/men.png"
import insta from "../assets/images/follow/insta.png"
import fb from "../assets/images/follow/fb.png"
import linkind from "../assets/images/follow/linkind.png"
import x from "../assets/images/follow/x.png"
import message from "../assets/images/follow/email.png"
import stayMessage from "../assets/images/contact/message.png"
import stayPhone from "../assets/images/contact/phone.png"
import stayLocation from "../assets/images/contact/location.png"
export const productsCategories = [
    {
        name: "Real State",
        img: realState,
    },
    {
        name: "Automobiles",
        img: automobile,
    },
    {
        name: "Electronics",
        img: electornic,
    },
    {
        name: "Animal & Pets",
        img: animal,
    },
    {
        name: "Clothing & fashion",
        img: fashion,
    },
    {
        name: "Jobs",
        img: jobs,
    },
    {
        name: "Services",
        img: services,
    },
    {
        name: "Books & Learning",
        img: books,
    },
    {
        name: "Furniture & Appliances",
        img: furniture,
    },
    {
        name: "Beauty",
        img: Beauty,
    },
    {
        name: "Gaming",
        img: gaming,
    },
]

export const featuresAdsData = [
    {
        name: "cars",
        title: `VOITURE DE SPORT EXCEPTIONNELLE`,
        description: `Å vendre: Voiture de sport exceptionnelle Découvrez cette
magnifique voiture de sport au design
aérodynamique et aux couleurs sai...`,
        date: "Oct 12th, 2024 at 16:52",
        place: "Montréal",
        view: "1000",
        price: "125,000 $",
        img: car,
    },
    {
        name: "Houses & Apartments For Rent",
        title: `Tesyeusye.`,
        description: `trtrekjtlrkjtelrkjtelkrjtek`,
        date: "Oct 16th, 2024 at 16:52",
        place: "Cambridge",
        view: "1000",
        price: "10,000 $",
        img: tesyeusye,
    },
    {
        name: "Modern House in Charming Suburb ",
        title: `Modern House in Charming Suburb
        `,
        description: `For Sale: Modern House in Charming SuburbLocation:
Oakville, Ontario, CanadaProperty Details:Size: 3,500 sq.
ft.Bedrooms:...`,
        date: "Sep 22nd, 2024 at 16:52",
        place: "Oakville",
        view: "1000",
        price: "1,750,000 $",
        img: house,
    },
]

export const homeFotterData = [
    {
        name: "Ads",
        img: mike,
        count: 71,
    },
    {
        name: "Trusted Sellers",
        img: seller,
        count: 71,
    },
    {
        name: "Locations",
        img: location,
        count: 71,
    },
]
export const registerInputData = [
    {
        firstIcon: men,
        thirdIcon: "",
        name: "Name",
        placeholder: "name",
    },
    {
        firstIcon: phone,
        thirdIcon: country,
        name: "Phone",
        placeholder: "PHONE NUMBER",
    },
    {
        firstIcon: email,
        email: "Email",
        placeholder: "Email",
        thirdIcon: "",
    },
    {
        firstIcon: lock,
        name: "Password",
        placeholder: "AT  LEAST 6 CHARACTERS",
        thirdIcon: eyeIcon,
    },
    {
        firstIcon: lock,
        name: "PASSWORD CONFIRMATION",
        placeholder: "AT  LEAST 6 CHARACTERS",
        thirdIcon: eyeIcon,
    },
]

export const screens = [
    {
        page: "HOME",
        link: "(root)/home",
    },
    {
        page: "View ads",
        link: "(root)/home",
    },
    {
        page: "Pricing",
        link: "(root)/home",
    },
    {
        page: "Faq",
        link: "(root)/home",
    },
    {
        page: "Contact us",
        link: "(root)/home",
    },
    {
        page: "ADVERTISE",
        link: "(root)/home",
    },
]

export const aboutUsData = [
    {
        page: "Anti-Scam",
    },
    {
        page: "Terms",
    },
    {
        page: "Privacy",
    },
]
export const contact = [
    {
        page: "Categories",
    },
    {
        page: "Countries",
    },
]

export const follow = [
    {
        img: insta,
    },
    {
        img: fb,
    },
    {
        img: linkind,
    },
    {
        img: x,
    },
    {
        img: message,
    },
]

export const pricingCategories = [
    {
        name: "Bronze",
        price: 29.99,
        title: "15 seconds video",
        features: [
            "1 Custom Thumbnail",
            "Video up to 15 seconds allowed",
            "Up to 1000 views for video",
            "This is our package for beginners",
            "You can edit or delete your ads anytime",
        ],
        recommended: false,
    },
    {
        name: "Silver",
        price: 84.99,
        title: "15 seconds video",
        features: [
            "1 Custom Thumbnail",
            "Video up to 15 seconds allowed",
            "Up to 1000 views for video",
            "This is our package for beginners",
            "You can edit or delete your ads anytime",
        ],
        recommended: true,
    },
    {
        name: "Gold",
        price: 29.99,
        title: "15 seconds video",
        features: [
            "1 Custom Thumbnail",
            "Video up to 15 seconds allowed",
            "Up to 1000 views for video",
            "This is our package for beginners",
            "You can edit or delete your ads anytime",
        ],
        recommended: false,
    },
    {
        name: "Titanium",
        price: 29.99,
        title: "15 seconds video",
        features: [
            "1 Custom Thumbnail",
            "Video up to 15 seconds allowed",
            "Up to 1000 views for video",
            "This is our package for beginners",
            "You can edit or delete your ads anytime",
        ],
        recommended: false,
    },
    {
        name: "Platinium",
        price: 29.99,
        title: "15 seconds video",
        features: [
            "1 Custom Thumbnail",
            "Video up to 15 seconds allowed",
            "Up to 1000 views for video",
            "This is our package for beginners",
            "You can edit or delete your ads anytime",
        ],
        recommended: false,
    },
    {
        name: "Palladium",
        price: 29.99,
        title: "15 seconds video",
        features: [
            "1 Custom Thumbnail",
            "Video up to 15 seconds allowed",
            "Up to 1000 views for video",
            "This is our package for beginners",
            "You can edit or delete your ads anytime",
        ],
        recommended: false,
    },
]

export const faq = [
    {
        question: `Why should I use Tranzaxx over other
classified ads to sell?`,
        ans: `WE'RE HERE TO ASSIST YOU WITH ANY QUESTIONS OR
INQUIRIES YOU HAVE. WHETHER IT'S ABOUT OUR
SERVICES, PRICING, OR SUPPORT, FEEL FREE TO REACH
OUT. OUR TEAM IS ALWAYS READY TO HELP YOU.`,
    },
    {
        question: `Why should I use Tranzaxx over other
classified ads to sell?`,
        ans: `WE'RE HERE TO ASSIST YOU WITH ANY QUESTIONS OR
INQUIRIES YOU HAVE. WHETHER IT'S ABOUT OUR
SERVICES, PRICING, OR SUPPORT, FEEL FREE TO REACH
OUT. OUR TEAM IS ALWAYS READY TO HELP YOU.`,
    },
    {
        question: `Why should I use Tranzaxx over other
classified ads to sell?`,
        ans: `WE'RE HERE TO ASSIST YOU WITH ANY QUESTIONS OR
INQUIRIES YOU HAVE. WHETHER IT'S ABOUT OUR
SERVICES, PRICING, OR SUPPORT, FEEL FREE TO REACH
OUT. OUR TEAM IS ALWAYS READY TO HELP YOU.`,
    },
    {
        question: `Why should I use Tranzaxx over other
classified ads to sell?`,
        ans: `WE'RE HERE TO ASSIST YOU WITH ANY QUESTIONS OR
INQUIRIES YOU HAVE. WHETHER IT'S ABOUT OUR
SERVICES, PRICING, OR SUPPORT, FEEL FREE TO REACH
OUT. OUR TEAM IS ALWAYS READY TO HELP YOU.`,
    },
]
export const contactUsForm = [
    {
        name: "First Name",
        placeholder: "Fist Name",
    },
    {
        name: "Last Name",
        placeholder: "First Name",
    },
    {
        name: "Company Name",
        placeholder: "Company Name",
    },
    {
        name: "Email Address",
        placeholder: "Email Address",
    },
    {
        name: "Message",
        placeholder: "Message",
    },
]

export const stayTouch = [
    {
        icon: stayMessage,
        name: "Email Us",
        title: "INFO@TRANZAXX.COM",
    },
    {
        icon: stayPhone,
        name: "PHONE NUMBER",
        title: "+1-000-000-0000",
    },
    {
        icon: stayLocation,
        name: "901 N PITT STR., SUITE 170",
        title: "ALEXANDRIA, VA 22314, USA",
    },
]

export const ads = [
    {
        category: "automobile",
        name: "cars",
        icon: "",
        place: "",
        price: "",
        title: "",
    },
]
