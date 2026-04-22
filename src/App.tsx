import { 
  Search, 
  BookOpen, 
  Users, 
  Monitor, 
  Heart, 
  Play, 
  Star, 
  Award, 
  Book, 
  Mail,
  MailPlus,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Hammer,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
  UserCircle,
  FileText,
  Lock,
  Library,
  SearchCode,
  DollarSign,
  GraduationCap,
  Gavel,
  Repeat,
  Video,
  FileSearch,
  Box,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useParams
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COURSES } from '../constants';
import { Course } from '../types';

// --- Shared Components ---

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`px-6 h-28 flex items-center w-full z-50 ${isHome ? 'bg-brand-primary text-white absolute top-0' : 'bg-brand-primary text-white relative shadow-lg'}`}>
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafkreifmmdjawp75glbdbshm3pcubhy2dt2yjo5dc74kxhlkqods5ym6hy" 
            alt="Edu Momentum Logo" 
            className="h-20 w-auto object-contain brightness-0 invert"
            referrerPolicy="no-referrer"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {[
            { name: 'HOME', href: '/' },
            { name: 'ABOUT', href: '/about' },
            { name: 'COURSES', href: '/courses' },
            { name: 'STUDENT SUPPORT', href: '/support' },
            { name: 'CONTACT US', href: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className="text-base font-heading font-semibold tracking-widest text-white/90 hover:text-white hover:scale-105 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="lg:hidden">
          <button className="text-white font-heading font-black uppercase text-base tracking-widest">Menu</button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#101828] text-white pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3 group mb-8">
            <img 
              src="https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafkreifmmdjawp75glbdbshm3pcubhy2dt2yjo5dc74kxhlkqods5ym6hy" 
              alt="Edu Momentum Logo" 
              className="h-24 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-gray-400 font-medium mb-8 max-w-sm leading-relaxed">
            Edu Momentum is a specialist institute delivering expert, industry-aligned training focused exclusively on the art and science of carpentry.
          </p>
          <div className="flex gap-4">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Youtube} />
          </div>
        </div>
        
        <div>
          <h5 className="font-heading font-bold text-base mb-8 tracking-widest uppercase text-white">Quick Links</h5>
          <ul className="space-y-4 text-gray-400 font-medium text-base">
            <li><Link to="/courses" className="hover:text-brand-secondary transition-colors">Courses</Link></li>
            <li><Link to="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
            <li><Link to="/support" className="hover:text-brand-secondary transition-colors">Student Support</Link></li>
            <li><Link to="/contact" className="hover:text-brand-secondary transition-colors">Contact Us</Link></li>
            <li><Link to="/policies" className="hover:text-brand-secondary transition-colors">Form</Link></li>
            <li><Link to="/forms" className="hover:text-brand-secondary transition-colors">Policies</Link></li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-heading font-bold text-base mb-8 tracking-widest uppercase text-white">Qualifications</h5>
          <ul className="space-y-4 text-gray-400 font-medium text-base">
            {COURSES.map(course => (
              <li key={course.id}>
                <Link to={`/course/${course.id}`} className="hover:text-brand-secondary transition-colors">
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 border-t border-white/10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          <div className="max-w-xl">
            <p className="text-white text-[16px] font-heading font-bold tracking-widest uppercase mb-4">
              &copy; 2026 Edu Momentum. Establishment phase. Dedicated to carpentry excellence.
            </p>
            <p className="text-white/70 text-base font-medium leading-relaxed normal-case">
              We acknowledge Aboriginal and Torres Strait Islander peoples as the First Australians and Traditional Custodians of the lands where we live, learn and work.
            </p>
          </div>

        
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[12px] font-heading font-black tracking-widest uppercase text-white/40">
              <span>RTO: Awaited</span>
              <span>ABN: Awaited</span>
              <span>ABN: 69 671 672 790</span>
            </div>
          </div>
        </div>
    </footer>
  );
}

// --- Helper UI Components ---

function SupportCard({ Icon, title, href = "#" }: { Icon: any, title: string, href?: string }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto');
  const className = "bg-white border border-brand-border rounded-[20px] p-8 flex flex-col items-center justify-center gap-6 hover:shadow-lg transition-all text-center group h-full";
  
  const content = (
    <>
      <div className="text-brand-accent group-hover:scale-110 transition-transform duration-300">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="text-base font-heading font-bold text-brand-primary leading-snug max-w-[160px]">
        {title}
      </h3>
    </>
  );

  if (isExternal) {
    return (
      <a 
        href={href} 
        className={className}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link 
      to={href} 
      className={className}
    >
      {content}
    </Link>
  );
}

function StatBox({ Icon, title, description }: { Icon: any, title: string, description: string }) {
  return (
    <div className="p-10 rounded-[32px] bg-brand-surface border border-brand-border flex flex-col items-start gap-6 hover:shadow-2xl transition-all duration-500 group">
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-brand-accent transition-colors duration-500">
        <Icon className="text-brand-accent group-hover:text-white transition-colors duration-500" size={28} />
      </div>
      <div>
        <h3 className="text-2xl font-heading font-black text-brand-primary mb-4 tracking-tight">{title}</h3>
        <p className="text-base text-text-muted font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface CourseCardProps {
  id: string;
  image: string;
  category: string;
  title: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ id, image, category, title }) => {
  return (
    <div className="bg-white rounded-[32px] border border-brand-border overflow-hidden group hover:shadow-2xl transition-all duration-500">
      <Link to={`/course/${id}`} className="block relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
          referrerPolicy="no-referrer"
        />
      </Link>
      <div className="p-8">
        <Link to={`/course/${id}`} className="block mb-8">
          <h3 className="text-xl font-heading font-black text-brand-primary group-hover:text-brand-accent transition-colors leading-tight">
            {title}
          </h3>
        </Link>
        <div className="h-px bg-brand-border mb-6" />
        <Link 
          to={`/course/${id}`} 
          className="text-[10px] font-heading font-black uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform text-brand-primary"
        >
          View Page &rarr;
        </Link>
      </div>
    </div>
  );
};

function FeatureItem({ Icon, title, description, highlight = false }: { Icon: any, title: string, description: string, highlight?: boolean }) {
  return (
    <div className={`p-8 rounded-[32px] border transition-all duration-500 flex flex-col items-start gap-4 ${highlight ? 'bg-white border-brand-accent shadow-xl md:-translate-y-2' : 'bg-white border-brand-border hover:border-brand-accent hover:shadow-lg'}`}>
      <Icon className="text-brand-accent" size={32} />
      <h3 className="text-xl font-heading font-black text-brand-primary tracking-tight">{title}</h3>
      <p className="text-base text-text-muted font-medium leading-relaxed">{description}</p>
    </div>
  );
}

function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-brand-secondary transition-colors border border-white/10">
      <Icon size={16} />
    </div>
  );
}

function ContactInfoItem({ Icon, label, content }: { Icon: any, label: string, content: React.ReactNode }) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="w-12 h-12 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center group-hover:bg-brand-accent transition-colors duration-500">
        <Icon size={24} className="text-brand-accent group-hover:text-white transition-colors duration-500" />
      </div>
      <div>
        <p className="text-[12px] font-heading font-black uppercase tracking-widest text-brand-secondary mb-1">{label}</p>
        <div className="text-lg font-heading font-black text-brand-primary leading-tight">{content}</div>
      </div>
    </div>
  );
}

// --- Page Components ---

function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="hero-gradient pt-48 pb-24 px-6 relative text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 items-center gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl lg:text-7xl font-heading font-black leading-tight mb-8">
              Empowering Skills.<br />
              Building Futures.
            </h1>
            <p className="text-lg opacity-80 max-w-lg mb-10 leading-relaxed font-medium">
              Edu Momentum is your premier destination for expert carpentry training. We bridge the gap between passion and profession, delivering industry-standard skills in woodcraft, framing, and residential construction.
            </p>
            <Link to="/courses" className="bg-white text-brand-accent px-10 py-5 rounded-full font-heading font-bold uppercase text-base tracking-widest shadow-xl hover:scale-105 transition-all inline-block hover:shadow-brand-accent/20">
              Explore Courses
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square bg-white/10 backdrop-blur-3xl rounded-[40px] border border-white/20 flex items-center justify-center p-8">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-secondary rounded-full opacity-30 blur-3xl animate-pulse" />
              <img 
                src="https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeig45uxgi33czgb23er7zvs76idnumrhw4ygn33yjquxwcpfu3y3wu" 
                alt="Construction training" 
                className="w-full h-full object-cover rounded-[32px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Quick View */}
      <section className="bg-brand-bg py-20 px-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-12">
          <StatBox 
            Icon={Monitor}
            title="Carpentry Essentials"
            description="Deep dive into residential framing, roof construction, and architectural woodcraft techniques."
          />
          <StatBox 
            Icon={Award}
            title="Craft Certifications"
            description="Focused paths for Certificate III in Carpentry, designed for the modern Australian tradie."
          />
          <StatBox 
            Icon={Book}
            title="Trade Workshops"
            description="Hands-on training with industry-standard power tools and high-quality timber materials."
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-5xl font-heading font-black text-brand-primary mb-8 leading-tight">Elite Carpentry Training Standards</h2>
            <p className="text-text-muted font-medium mb-10 leading-relaxed">Our curriculum is built on the foundations of precision and quality. We specialize in residential carpentry, ensuring every graduate leaves with the confidence to build a legacy.</p>
            <Link to="/about" className="bg-brand-accent text-white px-8 py-4 rounded-full font-heading font-bold uppercase text-base tracking-widest w-fit shadow-xl">About Us</Link>
          </div>
          
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
             <FeatureItem 
               Icon={Award}
               title="Timber Mastery"
               description="Advanced understanding of wood species, grading, and sustainable construction practices."
             />
             <FeatureItem 
               Icon={Users}
               title="Master Carpenters"
               description="Learn from trade veterans who have led major residential projects across Queensland."
             />
             <FeatureItem 
               Icon={Heart}
               title="Lifelong Craft"
               description="Carpentry is a lifetime journey. We provide ongoing support for your professional growth."
             />
             <FeatureItem 
               Icon={Monitor}
               title="Site Ready Skills"
               description="Everything from site setup to final fit-out, focused on real job-site productivity."
             />
          </div>
        </div>
      </section>

      {/* Course Search Bar Section - Moved to bottom above footer */}
      <CourseSearch />
    </motion.div>
  );
}

function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-bg min-h-screen"
    >
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px]" />
            <img 
              src="https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeicui5ynj2za62affvihrfs5upqkl6sct4tmkfda63r3mpffjrzbzq" 
              alt="Building site" 
              className="rounded-[40px] shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[32px] shadow-2xl z-20 max-w-[280px] border border-brand-border">
              <p className="text-brand-secondary font-black text-4xl mb-2 font-heading">100%</p>
              <p className="text-text-main font-heading font-bold text-lg leading-tight">Practical & Industry Focused Training</p>
            </div>
          </motion.div>

          <div className="flex flex-col">
            <h4 className="text-brand-secondary font-heading font-black uppercase tracking-[0.2em] text-base mb-6">Our Carpentry Legacy</h4>
            <h2 className="text-5xl font-heading font-black text-brand-primary mb-8 leading-tight">Empowering Skills. Building Futures.</h2>
            <div className="space-y-6 text-text-muted font-medium leading-relaxed">
              <p>
               Edu Momentum is a developing education provider focused on supporting individuals who want to build a career in the construction industry. The college is being established with the intention of delivering practical, skills-based training that reflects real workplace expectations and industry needs. Edu Momentum aims to create a learning environment where students feel supported, guided, and confident as they progress through their studies and prepare for employment. The organisation plans to offer qualifications in carpentry, painting and decorating, and building and construction, with a strong emphasis on hands-on learning and job readiness. Edu Momentum is currently in the establishment phase, and registration as a Registered Training Organisation (RTO) and CRICOS provider will be pursued in the future, with all proposed courses subject to regulatory approval.
              </p>
              <div className="p-6 bg-white rounded-2xl border border-brand-border shadow-sm">
                <h5 className="font-black text-brand-primary mb-4 text-base uppercase tracking-widest">Establishment Phase</h5>
                <p className="text-xs italic leading-relaxed">
                  Edu Momentum is currently in the establishment phase. Registration as a Registered Training Organisation (RTO) and CRICOS provider will be pursued following formal approval of the college. All qualifications listed are proposed future offerings and subject to regulatory approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
  );
}

function CoursesPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="max-w-2xl mb-20">
           
            <h2 className="text-5xl font-heading font-black text-brand-primary mb-8 leading-tight">Master the Art of Carpentry</h2>
            <p className="text-text-muted font-medium leading-relaxed">Our qualifications are specifically tailored for aspiring carpenters and builders. From the first cut to the final inspection, we guide you through every level of the trade.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {COURSES.map(course => (
              <CourseCard 
                key={course.id}
                id={course.id}
                image={course.image}
                category={course.category}
                title={course.title}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-brand-surface p-10 rounded-[40px] border border-brand-border flex items-center gap-8 group hover:shadow-xl transition-all">
               <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg group-hover:bg-brand-secondary transition-colors">
                  <BookOpen size={40} className="text-brand-secondary group-hover:text-white transition-colors" />
               </div>
               <div>
                 <h4 className="text-2xl font-heading font-black text-brand-primary mb-2 tracking-tight">Practical Workshops</h4>
                 <p className="text-base text-text-muted font-medium">Hands-on experience in simulated job site environments.</p>
               </div>
            </div>
            <div className="bg-brand-surface p-10 rounded-[40px] border border-brand-border flex items-center gap-8 group hover:shadow-xl transition-all">
               <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg group-hover:bg-brand-accent transition-colors">
                  <Monitor size={40} className="text-brand-accent group-hover:text-white transition-colors" />
               </div>
               <div>
                 <h4 className="text-2xl font-heading font-black text-brand-primary mb-2 tracking-tight">Flexible Learning</h4>
                 <p className="text-base text-text-muted font-medium">Face to Face learning models designed for modern tradespeople.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function CourseDetailPage() {
  const { courseId } = useParams();
  const course = COURSES.find(c => c.id === courseId);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);

  if (!course) return (
    <div className="min-h-screen pt-48 px-6 lg:px-20 text-center">
      <h2 className="text-2xl font-heading font-black text-brand-primary">Course Not Found</h2>
      <Link to="/courses" className="text-brand-accent font-heading font-bold mt-4 inline-block tracking-widest uppercase text-base">&larr; Back to Courses</Link>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-bg min-h-screen"
    >
      {/* Hero Banner */}
      <section className="bg-brand-primary pt-16 pb-20 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={course.image} alt="" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-2 text-white/50 text-xs font-heading font-black uppercase tracking-widest mb-6">
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white/80">{course.code}</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-black leading-tight max-w-4xl mb-6">
            {course.title}
          </h1>
          <span className="inline-block bg-brand-accent text-white text-xs font-heading font-black uppercase tracking-widest px-5 py-2 rounded-full">
            {course.category}
          </span>
        </div>
      </section>

      {/* Main Layout */}
      <section className="px-6 py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* LEFT SIDEBAR */}
            <div className="lg:col-span-4 space-y-6">

              {/* Course Details Card */}
              <div className="bg-white rounded-[24px] border border-brand-border shadow-sm overflow-hidden sticky top-8">
                <div className="bg-brand-accent px-6 py-4">
                  <h3 className="text-white font-heading font-black text-base uppercase tracking-widest">Course Details</h3>
                </div>
                <div className="p-8 space-y-7">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-brand-accent">
                        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-heading font-black uppercase tracking-widest text-brand-secondary mb-1.5">Duration</p>
                      <p className="text-lg font-heading font-black text-brand-primary leading-tight">{course.durationStructure}</p>
                      {course.durationDetail && (
                        <p className="text-base text-text-muted font-medium mt-2 leading-relaxed">{course.durationDetail}</p>
                      )}
                    </div>
                  </div>

                  <div className="h-px bg-brand-border" />

                  {course.unitsCount && (
                    <>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-brand-accent text-xl font-heading font-black">#</span>
                        </div>
                        <div>
                          <p className="text-xs font-heading font-black uppercase tracking-widest text-brand-secondary mb-1.5">Number of Units</p>
                          <p className="text-lg font-heading font-black text-brand-primary leading-tight">{course.unitsCount}</p>
                          {course.unitsDetail && (
                            <p className="text-base text-text-muted font-medium mt-2 leading-relaxed">{course.unitsDetail}</p>
                          )}
                        </div>
                      </div>
                      <div className="h-px bg-brand-border" />
                    </>
                  )}

                 
                  <div className="h-px bg-brand-border" />

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-brand-accent">
                        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-heading font-black uppercase tracking-widest text-brand-secondary mb-1.5">Course Code</p>
                      <p className="text-base font-heading font-black text-brand-primary">{course.code}</p>
                    </div>
                  </div>

                 

                  <div className="h-px bg-brand-border" />

                  {course.tuitionFees && (
                    <>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <DollarSign size={20} className="text-brand-accent" />
                        </div>
                        <div>
                          <p className="text-xs font-heading font-black uppercase tracking-widest text-brand-secondary mb-1.5">Tuition Fees</p>
                          <p className="text-base font-heading font-black text-brand-primary">{course.tuitionFees}</p>
                        </div>
                      </div>
                      <div className="h-px bg-brand-border" />
                    </>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <DollarSign size={20} className="text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-heading font-black uppercase tracking-widest text-brand-secondary mb-1.5">Non-Tuition Fees</p>
                      <p className="text-base font-heading font-black text-brand-primary">{course.nonTuitionFees}</p>
                    </div>
                  </div>

                 

                  <div className="pt-4 space-y-4">
                   
                    

                    <a 
                      href={`https://training.gov.au/training/details/${course.code}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-brand-accent text-white py-4 rounded-xl font-heading font-black text-base tracking-widest hover:bg-brand-primary transition-all shadow-md text-center"
                    >
                      View on training.gov.au
                    </a>

                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT MAIN CONTENT */}
            <div className="lg:col-span-8 space-y-10">

              {/* Quick Info Bar */}
              <div className="bg-white rounded-[24px] border border-brand-border p-6 grid grid-cols-3 gap-6">
                <div className="text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-brand-bg flex items-center justify-center mb-2">
                    <MapPin size={16} className="text-brand-accent" />
                  </div>
                  <p className="text-[10px] font-heading font-black uppercase tracking-widest text-brand-accent mb-1">Location</p>
                  <p className="text-base font-heading font-black text-brand-primary">NSW</p>
                </div>
                <button 
                  onClick={() => setShowDeliveryModal(true)}
                  className="text-center border-x border-brand-border flex flex-col items-center hover:bg-brand-bg transition-colors cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-bg flex items-center justify-center mb-2 group-hover:bg-brand-surface">
                    <Monitor size={16} className="text-brand-accent" />
                  </div>
                  <p className="text-[10px] font-heading font-black uppercase tracking-widest text-brand-accent mb-1">Mode of Delivery</p>
                  <p className="text-base font-heading font-black text-brand-primary underline decoration-brand-accent/30 underline-offset-4">{course.deliveryMode}</p>
                </button>
                <div className="text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-brand-bg flex items-center justify-center mb-2">
                    <SearchCode size={16} className="text-brand-accent" />
                  </div>
                  <p className="text-[10px] font-heading font-black uppercase tracking-widest text-brand-accent mb-1">Course Code</p>
                  <p className="text-base font-heading font-black text-brand-primary">{course.code}</p>
                </div>
              </div>

              {/* Qualification Description */}
              <div className="bg-white rounded-[24px] border border-brand-border p-10">
                <h2 className="text-2xl font-heading font-black text-brand-primary mb-6 pb-4 border-b border-brand-border">
                  Qualification Description
                </h2>
                <div className="text-text-muted font-medium leading-relaxed whitespace-pre-line">
                  {course.description.split(/(CPCWHS1001|Prepare to work safely in the construction industry|Code of Practice: Construction Work)/g).map((part, i) => {
                    if (part === 'CPCWHS1001') {
                      return (
                        <a 
                          key={i}
                          href="https://training.gov.au/training/details/CPCWHS1001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline font-heading font-black"
                        >
                          {part}
                        </a>
                      );
                    }
                    if (part === 'Prepare to work safely in the construction industry' || part === 'Code of Practice: Construction Work') {
                      return <em key={i} className="italic">{part}</em>;
                    }
                    return part;
                  })}
                </div>
             
              </div>

              {/* Course Entry Requirements */}
              <div className="bg-white rounded-[24px] border border-brand-border p-10">
                <h2 className="text-2xl font-heading font-black text-brand-primary mb-6 pb-4 border-b border-brand-border">
                  Course Entry Requirements
                </h2>
                <div className="space-y-4">
                  {course.entryRequirements.map((req, i) => {
                    const isHeading = req.endsWith(':');
                    if (isHeading) {
                      return (
                        <p key={i} className="text-brand-primary font-heading font-black pt-2 first:pt-0">
                          {req}
                        </p>
                      );
                    }
                    return (
                      <div key={i} className="flex gap-4 items-start pl-4">
                        <span className="text-text-muted font-medium leading-relaxed">{req}</span>
                      </div>
                    );
                  })}
                </div>

            

              
              </div>


              {/*LLND */}
              <div className="bg-white rounded-[24px] border border-brand-border p-10">
                <h2 className="text-2xl font-heading font-black text-brand-primary mb-6 pb-4 border-b border-brand-border">
             Language, Literacy, Numeracy, and Digital skills (LLND)​

                </h2>
                <p className="text-text-muted font-medium leading-relaxed mb-6">
                  Literacy, Numeracy and Digital (LLND) assessment. This assessment is completed as part of the pre-enrolment process. The LLND assessment helps identify whether a student may need additional support during their studies and ensures they are placed in a course that is appropriate for their skill level. Assessments are aligned with the Australian Core Skills Framework (ACSF) and include language, literacy, numeracy and digital skills.

Students must complete their LLND assessment via the LLND Portal before they can be formally enrolled. Further instructions on how to access and complete the assessment will be provided to prospective students as part of the pre-enrolment process.
                </p>

           
              </div>




                 {/* Pre Enrollment Info */}
              <div className="bg-white rounded-[24px] border border-brand-border p-10">
                <h2 className="text-2xl font-heading font-black text-brand-primary mb-6 pb-4 border-b border-brand-border">
                 Pre-enrolment Information
                </h2>
                <div className="text-text-muted font-medium leading-relaxed whitespace-pre-line">
                  {course.preEnrolmentInfo}
                </div>
             
              </div>

              {/* Packaging Rules / Units */}
              <div className="bg-white rounded-[24px] border border-brand-border p-10">
                <h2 className="text-2xl font-heading font-black text-brand-primary mb-6 pb-4 border-b border-brand-border">
                  Packaging Rules
                </h2>
                <div className="overflow-hidden rounded-2xl border border-brand-border">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-brand-primary text-white">
                        <th className="text-left px-6 py-4 text-xs font-heading font-black uppercase tracking-widest w-[160px]">Unit Code</th>
                        <th className="text-left px-6 py-4 text-xs font-heading font-black uppercase tracking-widest">Unit Name</th>
                        <th className="text-center px-6 py-4 text-xs font-heading font-black uppercase tracking-widest w-[100px]">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.units.map((unit, i) => {
                        const parts = unit.includes(' | ') ? unit.split(' | ') : unit.split(' - ');
                        const code = parts[0];
                        const desc = parts[1] || parts.slice(1).join(' - ');
                        const type = parts[2] || 'Core';
                        
                        return (
                          <tr
                            key={i}
                            className={`border-t border-brand-border ${i % 2 === 0 ? 'bg-white' : 'bg-brand-bg/40'} hover:bg-brand-surface transition-colors`}
                          >
                            <td className="px-6 py-4 text-xs font-heading font-black text-brand-accent whitespace-nowrap">{code}</td>
                            <td className="px-6 py-4 text-base font-medium text-text-muted">{desc || unit}</td>
                            <td className="px-6 py-4 text-center">
                              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-heading font-black uppercase tracking-wider bg-brand-accent/10 text-brand-accent">
                                {type}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                      
                      {course.licensingOutcomes && (
                        <tr className="border-t-2 border-brand-border bg-brand-bg/10">
                          <td className="px-6 py-6 text-base font-heading font-black text-brand-primary align-top">
                            Description of licensing requirements
                          </td>
                          <td colSpan={2} className="px-6 py-6 text-base font-medium text-text-muted leading-relaxed">
                            {course.licensingOutcomes}
                          </td>
                        </tr>
                      )}

                      {course.additionalRequirements && (
                        <tr className="border-t border-brand-border bg-brand-bg/5">
                          <td className="px-6 py-6 text-base font-heading font-black text-brand-primary align-top">
                            Additional requirements
                          </td>
                          <td colSpan={2} className="px-6 py-6 text-base font-medium text-text-muted leading-relaxed">
                            {course.additionalRequirements.split(/(CPCWHS1001)/).map((part, i) => 
                              part === 'CPCWHS1001' ? (
                                <a 
                                  key={i}
                                  href="https://training.gov.au/training/details/CPCWHS1001" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="hover:underline font-heading font-black"
                                >
                                  {part}
                                </a>
                              ) : part
                            )}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Qualification Issued */}
              <div className="bg-white rounded-[24px] border border-brand-border p-10">
                <h2 className="text-2xl font-heading font-black text-brand-primary mb-6 pb-4 border-b border-brand-border">
                  Qualification Issued
                </h2>
                <p className="text-text-muted font-medium leading-relaxed mb-6">
                  Once the units of competency required in the training package for this qualification have been successfully completed, the student will be issued with the <strong>{course.title}</strong>. and an academic transcript of all completed units within 30 calendar days. Students who successfully complete individual units of competency within the qualification, but not the qualification in its entirety will be eligible to receive a Statement of Attainment. This document contains a record of all completed units and will be available to students by the end of their course.
                </p>

                <div className="space-y-6 pt-6 border-t border-brand-border">
                  <div>
                    <h3 className="text-base font-heading font-black text-brand-primary uppercase tracking-widest mb-3">Edu Momentum does not guarantee:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-text-muted font-medium text-base leading-relaxed">
                      <li>a student will successfully complete a training product on its scope of registration; or</li>
                      <li>a training product can be completed in a manner that does not meet the relevant requirements set out in an instrument made under section 185 of the National Vocational Education and Training Regulator Act 2011; or</li>
                      <li>a student will obtain a particular employment outcome where this is outside the control of the RTO.</li>
                    </ul>
                    <p className="mt-4 text-xs font-heading font-black text-brand-accent uppercase tracking-wider">
                      Edu Momentum qualifications only fulfil the academic requirement, not a licensed trade qualification, traineeship or apprenticeship.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-heading font-black text-brand-primary uppercase tracking-widest mb-3">Edu Momentum does not:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-text-muted font-medium text-base leading-relaxed mb-4">
                      <li>claim to commit to secure for, or on the student or intending student’s behalf, a migration outcome from undertaking any course offered by the College</li>
                    </ul>
                    <p className="text-base text-text-muted font-medium leading-relaxed">
                      We strongly advise that students consult with a registered migration agent if they require more specific information. For the most up to date information please refer to the Australian Government’s Home Affairs website: <a href="https://immi.homeaffairs.gov.au/" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline font-heading font-black">immi.homeaffairs.gov.au</a>.
                    </p>
                  </div>
                </div>
              
              </div>

            {/* Equipment Required */}
          <div className="bg-white rounded-[24px] border border-brand-border p-10">
          <h2 className="text-2xl font-heading font-black text-brand-primary mb-6 pb-4 border-b border-brand-border">
           Equipment Required
         </h2>
         <div className="text-text-muted font-medium leading-relaxed whitespace-pre-line">
       {course.equipmentRequired}
       </div>
        </div>

          

             {/* Related Occupations */}
<div className="bg-white rounded-[24px] border border-brand-border p-10">
  <h2 className="text-2xl font-heading font-black text-brand-primary mb-6 pb-4 border-b border-brand-border">
    Related Occupations
  </h2>
  <div className="flex flex-wrap gap-3">
    {(course.occupations ?? ["Carpenter", "Construction Supervisor", "Site Manager", "Trade Specialist"]).map((tag) => (
      <span key={tag} className="px-5 py-2 bg-brand-bg border border-brand-border rounded-full text-xs font-heading font-black uppercase tracking-widest text-brand-primary hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-colors cursor-default">
        {tag}
      </span>
    ))}
  </div>
 
</div>

            </div>
          </div>
        </div>

        <AnimatePresence>
          {showDeliveryModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowDeliveryModal(false)}
                className="absolute inset-0 bg-brand-primary/90 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-[32px] w-full max-w-2xl relative z-10 overflow-hidden shadow-2xl border border-brand-border"
              >
                <div className="p-8 border-b border-brand-border flex justify-between items-center bg-brand-bg/50">
                  <h2 className="text-2xl font-heading font-black text-brand-primary uppercase tracking-tight">Mode of Delivery</h2>
                  <button 
                    onClick={() => setShowDeliveryModal(false)}
                    className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm"
                  >
                    &times;
                  </button>
                </div>
                <div className="p-10">
                  <p className="text-text-muted font-medium leading-relaxed mb-6">
                    {course.deliveryDetail || "Delivery details for this qualification are available upon request."}
                  </p>
                  {course.deliveryNotes && course.deliveryNotes.length > 0 && (
                    <div className="bg-brand-bg p-8 rounded-2xl border border-brand-border">
                      <h4 className="text-base font-heading font-black text-brand-primary uppercase tracking-widest mb-4">Note:</h4>
                      <ul className="space-y-4">
                        {course.deliveryNotes.map((note, idx) => (
                          <li key={idx} className="flex gap-4 group">
                            <span className="w-6 h-6 rounded-full bg-brand-accent text-white flex items-center justify-center text-[10px] font-heading font-black flex-shrink-0 mt-1 shadow-sm group-hover:scale-110 transition-transform">
                              {idx + 1}
                            </span>
                            <p className="text-base text-text-muted font-medium leading-relaxed">
                              {note}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="p-8 bg-brand-bg/30 border-t border-brand-border flex justify-end">
                  <button 
                    onClick={() => setShowDeliveryModal(false)}
                    className="px-8 py-3 bg-brand-primary text-white rounded-xl font-heading font-black text-xs uppercase tracking-widest hover:bg-brand-accent transition-all shadow-md active:scale-95"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </motion.div>
  );
}
function CourseSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Course[]>([]);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length > 1) {
      const filtered = COURSES.filter(course => 
        course.title.toLowerCase().includes(val.toLowerCase()) ||
        course.id.toLowerCase().includes(val.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <section className="relative py-24 px-6 group">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeig45uxgi33czgb23er7zvs76idnumrhw4ygn33yjquxwcpfu3y3wu" 
          alt="Search backdrop" 
          className="w-full h-full object-cover grayscale brightness-[0.2] transition-transform duration-[20s] group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-slate-900/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-30">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4 leading-tight">
            Let's get you to the right place
          </h2>
          <p className="text-xl text-white/70 font-medium mb-10 font-heading">
            Search for a course or course Code
          </p>

          <div className="relative max-w-xl">
            <div className="flex items-center bg-white rounded-xl shadow-2xl overflow-hidden focus-within:ring-8 focus-within:ring-brand-accent/20 focus-within:border-brand-accent transition-all border-2 border-brand-border">
              <div className="pl-6 text-gray-400">
                <Search size={24} />
              </div>
              <input 
                type="text" 
                value={query}
                onChange={handleSearch}
                placeholder="e.g. CPC30220" 
                className="w-full px-4 py-5 font-medium text-brand-primary placeholder:text-gray-300 focus:outline-none"
              />
            </div>

            {/* Search Results Dropdown */}
            <AnimatePresence>
              {results.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-4 w-full bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-brand-border overflow-hidden z-50 p-2"
                >
                  {results.map(course => (
                    <button
                      key={course.id}
                      onClick={() => navigate(`/course/${course.id}`)}
                      className="w-full text-left p-4 hover:bg-brand-surface rounded-xl transition-colors flex items-center gap-4 group/item"
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={course.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[12px] font-black tracking-widest text-brand-accent uppercase mb-0.5">{course.category}</p>
                        <p className="text-base font-black text-brand-primary group-hover/item:text-brand-accent transition-colors">{course.title}</p>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudentSupportPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-bg min-h-screen pb-24"
    >
      <section className="pt-24 px-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-black text-brand-primary mb-4">Student Portals & Resources</h2>
            <p className="text-text-muted font-medium">Quick access to all our digital platforms and support services.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <SupportCard Icon={HelpCircle} title="FAQ's" />
            <SupportCard Icon={MapPin} title="Campus & Training Facility Locations" href="/contact" />
            <SupportCard Icon={FileText} title=" PDF Forms" href="/forms" />
            <SupportCard Icon={FileSearch} title="PDF Policies" href="/policies" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <SupportCard Icon={Mail} title="Student Digital Mail" href="mailto:studentsupportedumomentum@gmail.com" />
            <SupportCard Icon={Lock} title="LMS Login" />
            <SupportCard Icon={DollarSign} title="Finance Support" />

            <SupportCard Icon={BookOpen} title="Learning and Assesment Support" />
          </div>

         

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          
            <SupportCard Icon={MapPin} title="Orientation" href="https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeih6hwpovs2he6r24aymnc45ofncjftojgmtneweituzmxzxo2h6d4" />
            <SupportCard Icon={MapPin} title="Student Handbook" href="https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeic4lqi5krmxjet4lunv2lal7hjg5bldf4mip5j5gwrttttqzpc2kq" />
           
            <SupportCard Icon={Heart} title="Counselling & Wellbeing" />
              <SupportCard Icon={GraduationCap} title="Graduation Ceremonies" />
            
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            
          
            <SupportCard Icon={UserCircle} title="Student Career Management" />
            <SupportCard Icon={Repeat} title="Academic/Articulation Pathways" />
             <SupportCard Icon={Gavel} title="Complaints & Appeals" />
          </div>

          
        </div>
      </section>
    </motion.div>
  );
}


function PDFFormsPage() {
  const policies = [
    { name: "Complaint and Appeal Form ", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeica2ljeilyafsdj4zjldturf2jhw7r6irq32v6wya4yzs34d6x2bm/Complaint%20and%20Appeal%20Form_V2.0.pdf" },
    { name: "Critical Incident Record Form ", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeica2ljeilyafsdj4zjldturf2jhw7r6irq32v6wya4yzs34d6x2bm/Critical%20Incident%20Record%20Form_V2.0.pdf" },
    { name: "Enrolment Extension Request Form ", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeica2ljeilyafsdj4zjldturf2jhw7r6irq32v6wya4yzs34d6x2bm/Enrolment%20Extension%20Request%20Form_V2.0.pdf" },
    { name: "Intervention Strategy Plan (ISP) Request Form ", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeica2ljeilyafsdj4zjldturf2jhw7r6irq32v6wya4yzs34d6x2bm/ISP%20Request%20Form_V2.0.pdf" },
    { name: "Refund Application For Tution Fees", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeica2ljeilyafsdj4zjldturf2jhw7r6irq32v6wya4yzs34d6x2bm/Refund%20Application%20Form_V2.0.pdf" },
    { name: "Special Consideration Form ", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeica2ljeilyafsdj4zjldturf2jhw7r6irq32v6wya4yzs34d6x2bm/Special%20Consideration%20Form%20V2.0.pdf" },
    { name: "Withdrawal and Release Form ", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeica2ljeilyafsdj4zjldturf2jhw7r6irq32v6wya4yzs34d6x2bm/Withdrawal%20and%20Release%20Form_V2.0.pdf" },

  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-bg min-h-screen pb-24"
    >
      <section className="bg-brand-primary py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link
            to="/support"
            className="text-white/60 text-xs font-heading font-black uppercase tracking-widest flex items-center gap-2 mb-6 hover:text-white transition-colors"
          >
            ← Back to Student Support
          </Link>
          <h1 className="text-5xl font-heading font-black leading-tight mb-4">
            PDF Forms
          </h1>
          <p className="text-white/70 font-medium max-w-xl leading-relaxed">
            Our forms ensure fair treatment and clear guidelines for all students. Download and review our institutional documents below.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-[32px] border border-brand-border overflow-hidden shadow-sm">
            {policies.map((policy, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-10 py-7 group hover:bg-brand-surface transition-colors ${
                  i !== policies.length - 1 ? "border-b border-brand-border" : ""
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:border-brand-accent transition-colors">
                    <FileSearch
                      size={18}
                      className="text-brand-accent group-hover:text-white transition-colors"
                    />
                  </div>
                  <span className="text-base font-heading font-black text-brand-primary">
                    {policy.name}
                  </span>
                </div>
                
                  <a href={policy.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brand-accent hover:bg-brand-primary text-white text-xs font-heading font-black uppercase tracking-widest px-6 py-3 rounded-full transition-all hover:scale-105 shadow-md"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function PDFPoliciesPage() {
  const policies = [
    { name: "Academic Misconduct Policy and Procedure", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiczuyfbet4fbz3jtf7wmoqbpsy36ofyhnt5rooo7fnjccpeva6zga/Academic%20Misconduct%20Policy%20and%20Procedure_V2.0.pdf" },
    { name: "Assessment Policy and Procedure", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiczuyfbet4fbz3jtf7wmoqbpsy36ofyhnt5rooo7fnjccpeva6zga/Assessment%20Policy%20and%20Procedure_V.2.0.pdf" },
    { name: "Complaints and Appeals Policy and Procedure", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiczuyfbet4fbz3jtf7wmoqbpsy36ofyhnt5rooo7fnjccpeva6zga/Complaints%20and%20Appeals%20Policy%20and%20Procedure_V2.0.pdf" },
    { name: "Credit Transfer Policy and Procedure", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiczuyfbet4fbz3jtf7wmoqbpsy36ofyhnt5rooo7fnjccpeva6zga/Credit%20Transfer%20Policy%20and%20Procedure_V2.0.pdf" },
    { name: "Critical Incident Management Policy and Procedure", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiczuyfbet4fbz3jtf7wmoqbpsy36ofyhnt5rooo7fnjccpeva6zga/Critical%20Incident%20Management%20Policy%20and%20Procedure_V2.0.pdf" },
    { name: "Language, Literacy, Numeracy and Digital Literacy (LLND) Policy and Procedure", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiczuyfbet4fbz3jtf7wmoqbpsy36ofyhnt5rooo7fnjccpeva6zga/Language%2C%20Literacy%2C%20Numeracy%20and%20Digital%20Literacy%20(LLND)%20Policy%20and%20Procedure_V2.0.pdf" },
    { name: "Monitoring Course Progress and Student Attendance Policy and Procedure", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiczuyfbet4fbz3jtf7wmoqbpsy36ofyhnt5rooo7fnjccpeva6zga/Monitoring%20Course%20Progress%20and%20Student%20Attendance%20Policy%20and%20Procedure_V2.0.pdf" },
    { name: "Overseas Student Transfer Policy and Procedure", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiczuyfbet4fbz3jtf7wmoqbpsy36ofyhnt5rooo7fnjccpeva6zga/Overseas%20Student%20Transfer%20Policy%20and%20Procedure_V2.0.pdf" },
    { name: "Pre-Enrolment and Enrolment Policy and Procedure", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiczuyfbet4fbz3jtf7wmoqbpsy36ofyhnt5rooo7fnjccpeva6zga/Pre-Enrolment%20and%20Enrolment%20Policy%20and%20Procedure_V2.0.pdf" },
    { name: "Refund Policy and Procedure", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiczuyfbet4fbz3jtf7wmoqbpsy36ofyhnt5rooo7fnjccpeva6zga/Refund%20Policy%20and%20Procedure_V2.0.pdf" },
    { name: "Student Conduct Rules", file: "https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiczuyfbet4fbz3jtf7wmoqbpsy36ofyhnt5rooo7fnjccpeva6zga/Student%20Conduct%20Rules_V1.0.pdf" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-bg min-h-screen pb-24"
    >
      <section className="bg-brand-primary py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link
            to="/support"
            className="text-white/60 text-xs font-heading font-black uppercase tracking-widest flex items-center gap-2 mb-6 hover:text-white transition-colors"
          >
            ← Back to Student Support
          </Link>
          <h1 className="text-5xl font-heading font-black leading-tight mb-4">
            PDF Policies
          </h1>
          <p className="text-white/70 font-medium max-w-xl leading-relaxed">
            Our policies ensure fair treatment and clear guidelines for all students. Download and review our institutional documents below.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-[32px] border border-brand-border overflow-hidden shadow-sm">
            {policies.map((policy, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-10 py-7 group hover:bg-brand-surface transition-colors ${
                  i !== policies.length - 1 ? "border-b border-brand-border" : ""
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:border-brand-accent transition-colors">
                    <FileSearch
                      size={18}
                      className="text-brand-accent group-hover:text-white transition-colors"
                    />
                  </div>
                  <span className="text-base font-heading font-black text-brand-primary">
                    {policy.name}
                  </span>
                </div>
                
                  <a href={policy.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brand-accent hover:bg-brand-primary text-white text-xs font-heading font-black uppercase tracking-widest px-6 py-3 rounded-full transition-all hover:scale-105 shadow-md"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ContactPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      <section className="py-24 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h4 className="text-brand-accent font-heading font-black uppercase tracking-[0.2em] text-base mb-6">Get In Touch</h4>
            <h2 className="text-5xl font-heading font-black text-brand-primary mb-8 leading-tight">Contact Us for Any Inquiry</h2>
            <p className="text-text-muted font-medium mb-12 leading-relaxed max-w-lg">
              Have questions about our future courses or the registration process? Our team is here to provide the information you need.
            </p>

            <div className="space-y-8">
              <ContactInfoItem 
                Icon={MapPin}
                label="Campus Address"
                content="841, George Street, Sydney NSW 2000"
              />
              <ContactInfoItem 
                Icon={MapPin}
                label="Workshop Address"
                content="Unit 7, 9A Foundry Road, Seven Hills NSW 2147"
              />
              <ContactInfoItem 
                Icon={Mail}
                label="Email"
                content={<a href="mailto:info@edumomentum.edu.au" className="hover:text-brand-accent transition-colors">info@edumomentum.edu.au</a>}
              />
              <ContactInfoItem 
                Icon={Phone}
                label="Call Us"
                content={<a href="tel:+61283955322" className="hover:text-brand-accent transition-colors">+61 2 8395 5322</a>}
              />
            </div>
          </div>

          <div className="bg-brand-surface border border-brand-border p-10 rounded-[40px] shadow-xl relative z-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-heading font-black uppercase tracking-widest text-text-muted">Full Name</label>
                  <input type="text" className="w-full bg-white border border-brand-border px-4 py-3 rounded-xl focus:outline-none focus:border-brand-accent transition-colors" placeholder="full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-heading font-black uppercase tracking-widest text-text-muted">Email Address</label>
                  <input type="email" className="w-full bg-white border border-brand-border px-4 py-3 rounded-xl focus:outline-none focus:border-brand-accent transition-colors" placeholder="email address" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-heading font-black uppercase tracking-widest text-text-muted">Subject</label>
                <input type="text" className="w-full bg-white border border-brand-border px-4 py-3 rounded-xl focus:outline-none focus:border-brand-accent transition-colors" placeholder="Inquiry about Carpentry III" />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-heading font-black uppercase tracking-widest text-text-muted">Message</label>
                <textarea rows={4} className="w-full bg-white border border-brand-border px-4 py-3 rounded-xl focus:outline-none focus:border-brand-accent transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-brand-accent text-white py-4 rounded-xl font-heading font-black uppercase text-base tracking-[0.2em] shadow-lg hover:shadow-brand-accent/20 transition-all hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
  );
}

// --- Main App ---

export default function App() {
  const basename = import.meta.env.MODE === 'production' ? '/Edu-Momentum' : '';

  return (
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col font-sans">
        <ScrollToTop />
        <Header />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/support" element={<StudentSupportPage />} />
              <Route path="/course/:courseId" element={<CourseDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/policies" element={<PDFPoliciesPage />} />
              <Route path="/forms" element={<PDFFormsPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
