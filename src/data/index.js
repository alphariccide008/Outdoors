import edu from "../assets/icons/edu.jpeg";
import prop from "../assets/icons/prop.jpeg";
import venture from "../assets/icons/edu.jpeg";
import {
  cardIcon,
  exchangeIcon,
  loanIcon,
  paymentIcon,
  phoneIcon,
  transferIcon,
  signupIcon,
  setupIcon,
  requestIcon,
  checkIcon,
  faceIcon,
  lockIcon,
  cartIcon,
  acctIcon,
  quote,
  linkedIn,
  facebook,
  instagram,
  x,
} from "../assets/icons";

export const navLinks = [
  { path: "/", name: "Home" },
  { path: "/about-us", name: "About Us" },
  { path: "/contact", name: "Contact" },
  { path: "/#blog", name: "Blog" },
  
];

export const trustedIcons = [
  {
    icon: edu,
    name: "EDU BRIDGE",
  },
  {
    icon: prop,
    name: "PROPELIO",
  },
  {
    icon: venture,
    name: "VENTURE TRIBE",
  },
];

export const features = [
  {
    icon: phoneIcon,
    desc: "Airtime & Data",
  },
  {
    icon: paymentIcon,
    desc: "Automatic Bill Payment",
  },
  {
    icon: loanIcon,
    desc: "Loan",
  },
  {
    icon: cardIcon,
    desc: "Virtual Card",
  },
  {
    icon: transferIcon,
    desc: "Transfer",
  },
  {
    icon: exchangeIcon,
    desc: "Currency Exchange",
  },
];

export const benefits = [
  {
    title: "fast and secure transactions",
    desc: " with VentriPay you get to enjoy a seamless fast, and secure transactions.",
  },
  {
    title: "blockchain technology",
    desc: " Utilizing blockchain for secure, transparent, and decentralized transactions.",
  },
  {
    title: "easy online access",
    desc: "With VentriPay you get to enjoy easy access to all our amazing features without facing any difficulties ",
  },
  {
    title: "competitive exchange rate",
    desc: "VentriPay is always ready to give you our esteemed costumers the best rate out there for all your financial transactions.",
  },
];

export const steps = [
  { no: "step1", icon: signupIcon, label: "Sign up on the App" },
  { no: "step2", icon: setupIcon, label: "Set up your Account" },
  { no: "step3", icon: requestIcon, label: "Request a Virtual Card" },
  { no: "step4", icon: checkIcon, label:"You are all set to use your Card" },
];

export const cardBenefits = [
  { icon: faceIcon, label: "fraud protection" },
  { icon: lockIcon, label: "enhance security" },
  { icon: cartIcon, label: "easy online purchase" },
  { icon: acctIcon, label: "improved accountability" },
];

export const testimonials = [
  {
    icon: quote,
    quote:"i love their customer service team,very responsive and friendly. they were above and beyond to assist me with my issues",
  },
  {
    icon: quote,
    quote:"they have one of the best currency conversion rate out there and you should definitely work with them. also, their network is very fast and swift, the best i’ve used.",
  },
  {
    icon: quote,
    quote:"very secured database so you have nothing to worry about your personal details and fraudster, their encryption is top notch.",
  },
];

export const footerLinks = [
  {
    title: "about",
    links: [
      { name: "Our Product", link: "/" },
      { name: "Privacy Policy", link: "/" },
      { name: "How it Works", link: "/" },
      { name: "Career", link: "/" },
    ],
  },
  {
    title: "about",
    links: [
      { name: "Our Product", link: "/" },
      { name: "Privacy Policy", link: "/" },
      { name: "How it Works", link: "/" },
      { name: "Career", link: "/" },
    ],
  },
  {
    title: "our services",
    links: [
      { name: "Transactions", link: "/" },
      { name: "Investment", link: "/" },
      { name: "Cards", link: "/" },
      { name: "Help Center", link: "/" },
    ],
  },
  {
    title: "contact us",
    links: [
      { name: "+234080000000", link: "+234080000000" },
      { name: "VentriPay@gmail.com", link: "mailto:VentriPay@gmail.com" },
    ],
  },
];

export const socialMedia = [
  { src: linkedIn,url:"https://www.linkedin.com/posts/ventripay_ventripay-securepayments-fintechsolutions-activity-7239193928955027459--yaL?utm_source=share&utm_medium=member_android", alt: "linkedIn logo" },
  { src: facebook,url:"https://www.facebook.com/61561739670957/posts/pfbid02pQ8c5wXEKpb48478EWfPTLYX5DjV8cEDo4M48bDZVb9mvKKpSuHXyShk3s8GGJoSl/", alt: "facebook logo" },
  { src: instagram, url:"https://www.instagram.com/p/C_uq6CXIF5v/?igsh=MWh0ZGV2cncyMmVhaQ==", alt: "instagram logo" },
  { src: x, url:"https://x.com/ventripay/status/1833427098523886065?t=1i_NJweUx7jEN9eM2v7-zA&s=19", alt: "x logo" },
];
