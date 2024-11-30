function addHeader() {
    const headerHTML = `
       <header
    class="w-full md:h-[14vh] h-[10vh] sticky z-50 bg-white top-0 left-0 flex items-center justify-between md:pl-[2vw] md:pr-[2vw] border-b-[2px]">
    <div class="flex items-center justify-start w-[20vw] gap-8 animate-animate-appear">
      <img alt="" loading="lazy" width="120" height="120" decoding="async" data-nimg="1" class=" cursor-pointer md:h-auto mt-2" style="color:transparent" src="Image/logo.png" />
    </div>
    <nav class="md:max-w-fit w-full hidden md:flex h-[100vh] md:h-[10vh] pt-6 transition-all duration-300 flex md:flex-row flex-col bg-white backdrop-blur-md md:relative absolute bg-opacity-80 md:top-0 top-[10vh] left-0 items-center animate-animate-appear md:justify-center overflow-hidden justify-center md:pt-0 gap-12 text-[1rem] font-[600] text-gray-600">
      <div class="hover:text-primary w-max transition-colors cursor-pointer duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-full text-primary after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 after:rounded-full">
        <a href="/dist/index.html">Home</a></div>
      <div
        class="hover:text-primary w-max transition-colors cursor-pointer duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 after:rounded-full">
        <a href="/dist/about.html">About Us</a></div>
      <div
        class="hover:text-primary w-max transition-colors cursor-pointer duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 after:rounded-full">
        <a href="/dist/speakers.html">Speakers</a></div>
      <div
        class="hover:text-primary w-max transition-colors cursor-pointer duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 after:rounded-full">
        <a href="/dist/Committee.html">Committee</a></div>
      <div
        class="hover:text-primary w-max transition-colors cursor-pointer duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 after:rounded-full">
        <a href="/dist/callforpapers.html">Call For Papers</a></div>
      <div
        class="hover:text-primary w-max transition-colors cursor-pointer duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 after:rounded-full">
        <a href="/dist/registration.html">Registration</a></div>
      <div
        class="hover:text-primary w-max transition-colors cursor-pointer duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 after:rounded-full">
        <a href="/dist/venue.html">Venue</a></div>
    </nav>
    <div class="w-[20vw] flex items-center justify-end gap-3">
      <img alt="" loading="lazy" width="100" height="20" decoding="async" data-nimg="1"
        class=" cursor-pointer hidden md:block" style="color:transparent" src="Image/iem-logo.png" />
      <img alt="" loading="lazy" width="100" height="20" decoding="async" data-nimg="1"
        class=" cursor-pointer hidden md:block" style="color:transparent" src="Image/uem-logo.png" />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-menu md:hidden mr-3 cursor-pointer">
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <line x1="4" x2="20" y1="6" y2="6"></line>
      <line x1="4" x2="20" y1="18" y2="18"></line>
    </svg>
  </header> 
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

addHeader();