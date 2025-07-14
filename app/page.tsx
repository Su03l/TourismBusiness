"use client"

import Image from "next/image"
import { PlusCircle } from "lucide-react"
import { AnimatedDiv } from "@/components/animated-div"
import { useState, useRef } from "react"

export default function HomePage() {
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userInteracted, setUserInteracted] = useState(false);

  function handlePlay() {
    setPlaying(true);
    setEnded(false);
    if (videoRef.current) videoRef.current.play();
  }
  function handleReplay() {
    setPlaying(true);
    setEnded(false);
    if (videoRef.current) videoRef.current.currentTime = 0;
    if (videoRef.current) videoRef.current.play();
  }
  function toggleSpeed() { const newSpeed = speed === 1 ? 1.5 : speed === 1.5 ? 2 : 1; setSpeed(newSpeed); if (videoRef.current) videoRef.current.playbackRate = newSpeed; }
  function toggleMute() { setMuted((m) => { if (videoRef.current) videoRef.current.muted = !m; return !m; }); }
  function handleTimeUpdate() { if (videoRef.current) setCurrentTime(videoRef.current.currentTime); }
  function handleLoadedMetadata() { if (videoRef.current) setDuration(videoRef.current.duration); }
  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const percent = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = (percent / 100) * duration;
      // If the video is paused, play it automatically after seeking
      if (videoRef.current.paused) {
        videoRef.current.play();
        setPlaying(true);
        setEnded(false);
      }
    }
  }
  function formatTime(sec: number) { if (!sec || isNaN(sec)) return '0:00'; const m = Math.floor(sec / 60); const s = Math.floor(sec % 60); return `${m}:${s.toString().padStart(2, '0')}`; }

  return (
    // Global wrapper to prevent horizontal scrollbar and ensure full width background
    <div className="w-full overflow-x-hidden">
      {/* Hero Section (Page 01) - No horizontal padding here */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/home page.png" alt="Elegant hotel corridor" fill className="object-cover" priority />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {/* Header */}
          <header className="p-4 sm:p-8">
            <div className="max-w-screen-2xl mx-auto px-2 sm:px-8 flex justify-between w-full items-center">
              {/* Top Left - Right Arm */}
              <div className="text-white">
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: 'Proxima Nova Regular, sans-serif',
                    fontWeight: "normal",
                    color: "#f4f5f3",
                  }}
                  className="sm:text-[12px]"
                >
                  RIGHT ARM
                </span>
              </div>

              {/* Top Right - Logo */}
              <div className="text-white" style={{ marginTop: "-10px" }}>
                <Image src="/logo3.png" alt="Right Arm Logo" width={100} height={70} className="w-[100px] h-[70px]" />
              </div>
            </div>
          </header>

          {/* Main Content - Center */}
          <main className="flex flex-1 items-center justify-center px-2 sm:px-8">
            <AnimatedDiv direction="down" delay={200} className="text-center text-white">
              <AnimatedDiv direction="down" delay={400}>
                <h1
                  className="mb-4 tracking-wide text-[32px] sm:text-[81.3px]"
                  style={{ fontFamily: 'The Seasons, serif', fontWeight: "normal" }}
                >
                  Tourism business
                </h1>
              </AnimatedDiv>
              <AnimatedDiv
                direction="up"
                delay={600}
                className="text-[13px] sm:text-[17.1px]"
                style={{
                  fontFamily: 'Proxima Nova Regular, sans-serif',
                  fontWeight: "normal",
                  letterSpacing: "0.1em",
                }}
              >
                R I G H T&nbsp;&nbsp;A R M
              </AnimatedDiv>
            </AnimatedDiv>
          </main>

          {/* Footer */}
          <footer className="p-8">
            <div className="max-w-screen-2xl mx-auto px-8">
              <div className="flex items-center justify-between w-full text-gray-400">
                <span
                  style={{ fontSize: "15px", fontFamily: '"Proxima Nova Regular", sans-serif', fontWeight: "normal" }}
                >
                  <a href="https://rightarm.site" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    rightarm.site
                  </a>
                </span>
                <span
                  style={{ fontSize: "15px", fontFamily: '"Proxima Nova Regular", sans-serif', fontWeight: "normal" }}
                >
                  <a href="tel:+966566705302" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    9666705302
                  </a>
                </span>
                <span
                  style={{ fontSize: "15px", fontFamily: '"Proxima Nova Regular", sans-serif', fontWeight: "normal" }}
                >
                  <a
                    href="mailto:info.arm.me@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    info.arm.me@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* About Us Section (Page 02) */}
      <div className="w-full pt-16 sm:pt-24" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-8">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-start gap-8 sm:gap-16 px-2 sm:px-8 pb-4">
            {/* Left - Image */}
            <div className="flex-shrink-0 w-full md:w-auto mb-4 md:mb-0 flex justify-center">
              <AnimatedDiv direction="left" delay={200}>
                <Image
                  src="/second.png"
                  alt="Modern hotel room"
                  width={340}
                  height={220}
                  className="object-cover rounded-lg w-full max-w-[340px] sm:max-w-[660px] h-auto"
                  priority
                />
              </AnimatedDiv>
            </div>
            {/* Right - Content */}
            <div className="flex-1 w-full md:w-auto">
              <div className="pl-0 md:pl-8">
                {" "}
                {/* Added pl-8 to align all text content consistently */}
                <AnimatedDiv direction="right" delay={200}>
                  <h2
                    style={{ fontSize: "48px", fontFamily: '"The Seasons", serif', color: "#ada070" }}
                    className="mb-4"
                  >
                    About Us
                  </h2>
                </AnimatedDiv>
                <AnimatedDiv direction="right" delay={300}>
                  {/* Decorative line */}
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-16 h-0.5" style={{ backgroundColor: "#ada070" }}></div>
                    <p style={{ fontSize: "17.1px", color: "#ada070" }} className="text-left">
                      Introduction to our work in the field of tourism
                    </p>
                  </div>
                </AnimatedDiv>
                <AnimatedDiv direction="right" delay={400}>
                  <p style={{ fontSize: "17.1px", color: "#ada070" }} className="text-left mb-4">
                    مقدمة عن عملنا في مجال السياحة
                  </p>
                </AnimatedDiv>
                <AnimatedDiv direction="right" delay={500} className="space-y-6">
                  <p style={{ fontSize: "13px", color: "white" }} className="leading-relaxed text-left">
                    شركتنا في المدينة المنورة متخصصة في تسويق الفنادق والقطاع السياحي، نقدم خدمات التصوير والتصميم
                    وإدارة الحسابات والحملات الإعلانية، ونهدف لزيادة الحجوزات والمبيعات من خلال استراتيجيات تسويقية
                    مبتكرة.
                  </p>
                  <p style={{ fontSize: "13px", color: "white" }} className="leading-relaxed text-left">
                    Our company in Madinah specializes in marketing hotels and the tourism sector. We offer photography,
                    design, account management, and advertising campaigns, aiming to increase bookings and sales through
                    innovative marketing strategies.
                  </p>
                </AnimatedDiv>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section - Page 03 */}
      <div className="w-full min-h-screen pt-16 sm:pt-24" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-8 flex flex-col h-full">
          {/* Main Content - Image Left, Text/List Right */}
          <div className="flex flex-col md:flex-row flex-1 items-center justify-center px-2 sm:px-8 pb-8 gap-8 sm:gap-12">
            {/* Left - Image */}
            <div className="flex-shrink-0 flex flex-col justify-center h-full w-full md:w-auto mb-4 md:mb-0">
              <AnimatedDiv direction="left" delay={200}>
                <Image
                  src="/third.png"
                  alt="Modern hotel lobby with tree and fountain"
                  width={320}
                  height={192}
                  className="object-cover rounded-lg shadow-lg w-full max-w-[320px] sm:max-w-[600px] h-auto"
                  priority
                />
              </AnimatedDiv>
            </div>
            {/* Right - Services List and Title */}
            <div className="flex-1 w-full md:w-auto pt-0">
              {/* Heading and Line */}
              <AnimatedDiv direction="right" delay={300}>
                <div className="flex flex-col items-center mb-4">
                  {" "}
                  {/* Changed items-start to items-center for horizontal centering */}
                  <h2
                    style={{ fontSize: "45px", fontFamily: '"The Seasons", serif', color: "#ada070" }}
                    className="mb-0"
                  >
                    Our services
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-0.5" style={{ backgroundColor: "#ada070" }}></div>
                    <p
                      style={{ fontSize: "45px", fontFamily: '"The Seasons", serif', color: "#ada070" }}
                      className="text-left"
                    >
                      خدماتنا
                    </p>
                  </div>
                </div>
              </AnimatedDiv>
              <div className="space-y-6 w-full">
                {" "}
                {/* Removed max-w-lg to allow full width */}
                {/* Service Item 1 (Left-aligned) */}
                <AnimatedDiv direction="left" delay={400}>
                  <div className="flex items-start justify-start gap-4">
                    <div className="w-3 h-3 rounded-full border border-[#ada070] flex items-center justify-center flex-shrink-0 mt-2">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <p
                        style={{
                          fontSize: "17px",
                          color: "#ada070",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                          fontWeight: "bold",
                        }}
                      >
                        Social Media Management
                      </p>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "white",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                        }}
                      >
                        إدارة وسائل التواصل الاجتماعي
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
                {/* Service Item 2 (Right-aligned) */}
                <AnimatedDiv direction="right" delay={500}>
                  <div className="flex items-start justify-end gap-4">
                    <div className="flex flex-col items-end text-right">
                      <p
                        style={{
                          fontSize: "17px",
                          color: "#ada070",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                          fontWeight: "bold",
                        }}
                      >
                        Paid Advertising (PPC)
                      </p>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "white",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                        }}
                      >
                        إدارة الإعلانات المدفوعة(PPC)
                      </p>
                    </div>
                    <div className="w-3 h-3 rounded-full border border-[#ada070] flex items-center justify-center flex-shrink-0 mt-2">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                  </div>
                </AnimatedDiv>
                {/* Service Item 3 (Left-aligned) */}
                <AnimatedDiv direction="left" delay={600}>
                  <div className="flex items-start justify-start gap-4">
                    <div className="w-3 h-3 rounded-full border border-[#ada070] flex items-center justify-center flex-shrink-0 mt-2">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <p
                        style={{
                          fontSize: "17px",
                          color: "#ada070",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                          fontWeight: "bold",
                        }}
                      >
                        Search Engine Optimization (SEO)
                      </p>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "white",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                        }}
                      >
                        تحسين محركات البحث (SEO)
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
                {/* Service Item 4 (Right-aligned) */}
                <AnimatedDiv direction="right" delay={700}>
                  <div className="flex items-start justify-end gap-4">
                    <div className="flex flex-col items-end text-right">
                      <p
                        style={{
                          fontSize: "17px",
                          color: "#ada070",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                          fontWeight: "bold",
                        }}
                      >
                        Content Marketing
                      </p>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "white",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                        }}
                      >
                        إنشاء المحتوى الإبداعي
                      </p>
                    </div>
                    <div className="w-3 h-3 rounded-full border border-[#ada070] flex items-center justify-center flex-shrink-0 mt-2">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                  </div>
                </AnimatedDiv>
                {/* Service Item 5 (Left-aligned) */}
                <AnimatedDiv direction="left" delay={800}>
                  <div className="flex items-start justify-start gap-4">
                    <div className="w-3 h-3 rounded-full border border-[#ada070] flex items-center justify-center flex-shrink-0 mt-2">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <p
                        style={{
                          fontSize: "17px",
                          color: "#ada070",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                          fontWeight: "bold",
                        }}
                      >
                        Creative Design for Posts and Content
                      </p>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "white",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                        }}
                      >
                        تصميم إبداعي للمنشورات والمحتوى
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
                {/* Service Item 6 (Right-aligned) */}
                <AnimatedDiv direction="right" delay={900}>
                  <div className="flex items-start justify-end gap-4">
                    <div className="flex flex-col items-end text-right">
                      <p
                        style={{
                          fontSize: "17px",
                          color: "#ada070",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                          fontWeight: "bold",
                        }}
                      >
                        Professional Photo & Video Production
                      </p>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "white",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                        }}
                      >
                        إنتاج فيديوهات وصور احترافية
                      </p>
                    </div>
                    <div className="w-3 h-3 rounded-full border border-[#ada070] flex items-center justify-center flex-shrink-0 mt-2">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                  </div>
                </AnimatedDiv>
                {/* Service Item 7 (Left-aligned) */}
                <AnimatedDiv direction="left" delay={1000}>
                  <div className="flex items-start justify-start gap-4">
                    <div className="w-3 h-3 rounded-full border border-[#ada070] flex items-center justify-center flex-shrink-0 mt-2">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <p
                        style={{
                          fontSize: "17px",
                          color: "#ada070",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                          fontWeight: "bold",
                        }}
                      >
                        Visual Identity & Print Design
                      </p>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "white",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                        }}
                      >
                        تصميم الهوية البصرية والمطبوعات
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
                {/* Service Item 8 (Right-aligned) */}
                <AnimatedDiv direction="right" delay={1100}>
                  <div className="flex items-start justify-end gap-4">
                    <div className="flex flex-col items-end text-right">
                      <p
                        style={{
                          fontSize: "17px",
                          color: "#ada070",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                          fontWeight: "bold",
                        }}
                      >
                        Sponsorship & Events
                      </p>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "white",
                          fontFamily: '"Proxima Nova Regular", sans-serif',
                        }}
                      >
                        تنسيق الرعاية والفعاليات
                      </p>
                    </div>
                    <div className="w-3 h-3 rounded-full border border-[#ada070] flex items-center justify-center flex-shrink-0 mt-2">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                  </div>
                </AnimatedDiv>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Business Section - Page 04 */}
      <div className="w-full pt-16 sm:pt-24" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-8">
          {/* Section Header - Adjusted for Page 04 */}
          <header className="flex flex-col items-center justify-center p-8">
            {/* Center - Title */}
            <div className="flex flex-col items-center">
              <h2 style={{ fontSize: "45px", fontFamily: 'The Seasons, serif', color: "#ada070", textAlign: 'center' }} className="mb-0">Our business</h2>
              <div className='flex flex-row-reverse items-center gap-4 w-full justify-center'>
                <p className='text-right' style={{ fontSize: '45px', fontFamily: 'The Seasons, serif', color: '#ada070', textAlign: 'center' }}>أعمالنا</p>
                <div className='w-40 h-0.5' style={{ backgroundColor: '#ada070' }}></div>
              </div>
            </div>
          </header>

          {/* Image Gallery */}
          <div className="flex justify-center gap-8 px-8 pb-8">
            {/* Rooms Image */}
            <AnimatedDiv direction="up" delay={200}>
              <div className="group flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div className="relative w-[402px] h-[268px] overflow-hidden">
                  <Image src="/Rooms.png" alt="Modern hotel room" fill className="object-cover" />
                </div>
                <div
                  className="flex items-center justify-center"
                  style={{ width: "402px", height: "67px", backgroundColor: "#192f50" }}
                >
                  <p className="text-white text-lg font-semibold">Rooms</p>
                </div>
              </div>
            </AnimatedDiv>

            {/* Housekeeping Image */}
            <AnimatedDiv direction="up" delay={400}>
              <div className="group flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div className="relative w-[402px] h-[268px] overflow-hidden">
                  <Image src="/Housekeeping.png" alt="Housekeeping service" fill className="object-cover" />
                </div>
                <div
                  className="flex items-center justify-center"
                  style={{ width: "402px", height: "67px", backgroundColor: "#192f50" }}
                >
                  <p className="text-white text-lg font-semibold">Housekeeping</p>
                </div>
              </div>
            </AnimatedDiv>

            {/* Chalets Image */}
            <AnimatedDiv direction="up" delay={600}>
              <div className="group flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div className="relative w-[402px] h-[268px] overflow-hidden">
                  <Image src="/Chalets.png" alt="Chalet with private pool" fill className="object-cover" />
                </div>
                <div
                  className="flex items-center justify-center"
                  style={{ width: "402px", height: "67px", backgroundColor: "#192f50" }}
                >
                  <p className="text-white text-lg font-semibold">Chalets</p>
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </div>

      {/* Our Facilities Section - Page 05 (Now "Our Business") */}
      <div className="w-full pt-16 sm:pt-24" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-8">
          {/* Section Header - Consistent with Page 04's new layout */}
          <header className="flex flex-col items-center justify-center p-8">
            {/* Center - Title changed to "Our business" */}
            <div className="flex flex-col items-center">
              <h2 style={{ fontSize: "45px", fontFamily: 'The Seasons, serif', color: "#ada070", textAlign: 'center' }} className="mb-0">Our business</h2>
              <div className='flex flex-row-reverse items-center gap-4 justify-center w-full'>
                <p className='text-right' style={{ fontSize: '45px', fontFamily: 'The Seasons, serif', color: '#ada070', textAlign: 'center' }}>أعمالنا</p>
                <div className='w-40 h-0.5' style={{ backgroundColor: '#ada070' }}></div>
              </div>
            </div>
          </header>

          {/* Image Gallery (Gym, Reception, Public facilities) */}
          <div className="flex justify-center gap-8 px-8 pb-8">
            {/* Gym Image */}
            <AnimatedDiv direction="up" delay={200}>
              <div className="group flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div className="relative w-[402px] h-[268px] overflow-hidden">
                  <Image src="/Gym.png" alt="Gym facilities" fill className="object-cover" />
                </div>
                <div
                  className="flex items-center justify-center"
                  style={{ width: "402px", height: "67px", backgroundColor: "#192f50" }}
                >
                  <p className="text-white text-lg font-semibold">Gym</p>
                </div>
              </div>
            </AnimatedDiv>

            {/* Reception Image */}
            <AnimatedDiv direction="up" delay={400}>
              <div className="group flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div className="relative w-[402px] h-[268px] overflow-hidden">
                  <Image src="/Reception.png" alt="Hotel reception area" fill className="object-cover" />
                </div>
                <div
                  className="flex items-center justify-center"
                  style={{ width: "402px", height: "67px", backgroundColor: "#192f50" }}
                >
                  <p className="text-white text-lg font-semibold">Reception</p>
                </div>
              </div>
            </AnimatedDiv>

            {/* Public facilities Image */}
            <AnimatedDiv direction="up" delay={600}>
              <div className="group flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div className="relative w-[402px] h-[268px] overflow-hidden">
                  <Image src="/Public-facilities.png" alt="General public facilities" fill className="object-cover" />
                </div>
                <div
                  className="flex items-center justify-center"
                  style={{ width: "402px", height: "67px", backgroundColor: "#192f50" }}
                >
                  <p className="text-white text-lg font-semibold">Public facilities</p>
                </div>
              </div>
            </AnimatedDiv>
          </div>

          {/* For More Button - Adjusted width and hover effect */}
          <div className="flex justify-center pb-8">
            <AnimatedDiv direction="up" delay={800}>
              <a
                href="https://drive.google.com/drive/folders/1lGoVfoPHiMhbV-spMTAor0bKTXDV_F3C?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-fit px-8 py-4 rounded-full text-white font-semibold transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: "#192f50" }}
              >
                For more
                <PlusCircle className="w-5 h-5" />
              </a>
            </AnimatedDiv>
          </div>
        </div>
      </div>

      {/* Our Gallery Section - Page 06 (New Page) */}
      <div className="w-full pt-16 sm:pt-24" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-8">
          {/* Section Header - Consistent with Page 04 & 05 layout */}
          <header className="flex flex-col items-center justify-center p-8">
            {/* Center - Title changed to "Our business" */}
            <div className="flex flex-col items-center">
              <AnimatedDiv direction="down" delay={200}>
                <h2 style={{ fontSize: "45px", fontFamily: 'The Seasons, serif', color: "#ada070", textAlign: 'center' }} className="mb-0">Our business</h2>
              </AnimatedDiv>
              <AnimatedDiv direction="down" delay={300}>
                <div className='flex flex-row-reverse items-center gap-4 justify-center w-full'>
                  <p className='text-right' style={{ fontSize: '45px', fontFamily: 'The Seasons, serif', color: '#ada070', textAlign: 'center' }}>أعمالنا</p>
                  <div className='w-40 h-0.5' style={{ backgroundColor: '#ada070' }}></div>
                </div>
              </AnimatedDiv>
            </div>
          </header>

          {/* Image Gallery (without text) */}
          <div className="flex justify-center gap-8 px-8 pb-8">
            {/* reception2 Image */}
            <AnimatedDiv direction="up" delay={400}>
              <div className="group flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div className="relative w-[402px] h-[268px] overflow-hidden">
                  <Image src="/reception2.png" alt="Hotel reception" fill className="object-cover" />
                </div>
              </div>
            </AnimatedDiv>

            {/* inside Image */}
            <AnimatedDiv direction="up" delay={600}>
              <div className="group flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div className="relative w-[402px] h-[268px] overflow-hidden">
                  <Image src="/inside.png" alt="Hotel interior" fill className="object-cover" />
                </div>
              </div>
            </AnimatedDiv>

            {/* livingRooms Image */}
            <AnimatedDiv direction="up" delay={800}>
              <div className="group flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div className="relative w-[402px] h-[268px] overflow-hidden">
                  <Image src="/livingRooms.png" alt="Hotel living rooms" fill className="object-cover" />
                </div>
              </div>
            </AnimatedDiv>
          </div>

          {/* For More Button - Added to Page 06 */}
          <div className="flex justify-center pb-8">
            <AnimatedDiv direction="up" delay={1000}>
              <a
                href="https://drive.google.com/drive/folders/1ecrKgr2qVKuQNQU7Ip5Og1rJi7LCP5IN?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-fit px-8 py-4 rounded-full text-white font-semibold transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: "#192f50" }} // Changed background to blue
              >
                For more
                <PlusCircle className="w-5 h-5" />
              </a>
            </AnimatedDiv>
          </div>
        </div>
      </div>

      {/* New Section - Page 07 */}
      <div className="w-full pt-16 sm:pt-24" style={{ backgroundColor: "#161616" }}>
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-8">
          {/* Section Header */}
          {/* Removed logo and RIGHT ARM here */}
          <div className="flex flex-col items-center py-8">
            <div className="bg-[#111] rounded-lg w-full max-w-[98vw] sm:max-w-[1000px]" style={{
              height: 'auto',
              minHeight: 220,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background: 'linear-gradient(135deg, #181818 60%, #232323 100%)',
              borderRadius: 24,
              boxShadow: '0 8px 32px 0 rgba(34,34,34,0.45)',
              border: '1.5px solid #222',
            }}>
              <video
                ref={videoRef}
                width={"100%"}
                height={"100%"}
                controls
                muted={muted}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => { setEnded(true); setPlaying(false); }}
                onPause={() => { if (!videoRef.current?.ended) setPlaying(false); }}
                onSeeking={() => setUserInteracted(true)}
                className="rounded-lg w-full h-auto max-h-[220px] sm:max-h-[580px]"
                style={{ borderRadius: 16 }}
              >
                <source src="/vid1.mp4" type="video/mp4" />
                {"Your browser does not support the video tag."}
              </video>
              {!playing && !ended && !userInteracted && (
                <button onClick={handlePlay} style={{
                  position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                  background: '#ada070', color: '#111', border: 'none', borderRadius: '50%', width: 80, height: 80, fontSize: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2
                }}>
                  ▶
                </button>
              )}
              {ended && (
                <button onClick={handleReplay} style={{
                  position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                  background: '#ada070', color: '#111', border: 'none', borderRadius: '50%', width: 80, height: 80, fontSize: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2
                }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                </button>
              )}
            </div>
            {/* Move the text/button container outside and after the video box, so it is not a child of the same flex row. This will ensure the video is on top, and the text/button are stacked below, both centered. */}
            <div className="w-[1000px] mx-auto mt-8">
              <div className="w-32 h-0.5 mb-4" style={{ backgroundColor: '#ada070' }}></div>
              <div className="flex items-center justify-between w-full">
                <h3 style={{ color: '#ada070', fontSize: '42px', fontFamily: 'The Seasons, serif' }}>Example of video work</h3>
                <a
                  href="https://drive.google.com/drive/folders/17AWw3zHoA8fi2FmOvuvWh7DIA2VLFO3G?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-fit px-8 py-4 rounded-full text-white font-semibold transition-transform duration-300 hover:scale-110"
                  style={{ backgroundColor: "#192f50" }} // Changed background to blue
                >
                  For more
                  <PlusCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section - Page 08 (Thank You Page) */}
      <div className="relative min-h-screen w-full overflow-hidden pt-16 sm:pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/Page8.png" alt="Hotel exterior at night with pool" fill className="object-cover" priority />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {/* Header */}
          {/* Removed logo and RIGHT ARM here */}
          <main className="flex flex-1 flex-col items-center justify-center px-8">
            <AnimatedDiv direction="down" delay={200} className="text-center text-white">
              <h1
                className="mb-8 font-black tracking-wide"
                style={{ fontSize: "110px", fontFamily: '"The Seasons", serif', color: "white" }}
              >
                Thank You
              </h1>
            </AnimatedDiv>
            <AnimatedDiv direction="up" delay={400} className="pt-8">
              <a
                href="http://wa.me/966566705302"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-transform duration-300"
                aria-label="Chat on WhatsApp"
              >
                <Image
                  src="/whatsapp-icon.png"
                  alt="WhatsApp Icon"
                  width={64}
                  height={64}
                  style={{ filter: "invert(1)" }}
                />
              </a>
            </AnimatedDiv>
          </main>

          {/* Footer */}
          <footer className="p-8">
            <div className="max-w-screen-2xl mx-auto px-8">
              <div className="flex items-center justify-between w-full text-gray-400">
                <span
                  style={{ fontSize: "15px", fontFamily: '"Proxima Nova Regular", sans-serif', fontWeight: "normal" }}
                >
                  <a href="https://rightarm.site" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    rightarm.site
                  </a>
                </span>
                <span
                  style={{ fontSize: "15px", fontFamily: '"Proxima Nova Regular", sans-serif', fontWeight: "normal" }}
                >
                  <a href="tel:+966566705302" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    966566705302
                  </a>
                </span>
                <span
                  style={{ fontSize: "15px", fontFamily: '"Proxima Nova Regular", sans-serif', fontWeight: "normal" }}
                >
                  <a
                    href="mailto:info.arm.me@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    info.arm.me@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
