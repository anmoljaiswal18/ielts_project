function addFooter() {
    const footerHTML = `
        <footer>
            <div class="w-full h-[40vh] bg-blue-200 mt-10 flex flex-col items-center justify-between">
                <div
                class="w-full h-[90%] flex md:flex-row flex-col items-center md:justify-between justify-center md:gap-0 gap-10 md:px-32 px-4">
                <div class=" md:h-full flex flex-col items-center justify-center gap-0">
                    <img alt="" loading="lazy" width="200" height="100" decoding="async" data-nimg="1" class=" hidden md:block"
                    style="color:transparent" src="Image/logo.png" />
                    <p class="md:text-sm text-xs text-blue-900 text-center">
                    3rd International Conference on<br />
                    Computational Intelligence, Data
                    <!-- -->
                    <!-- -->
                    Science and Cloud Computing<br />April 11-12, 2025
                    </p>
                </div>
                <div
                    class=" md:flex md:flex-col grid grid-cols-2 items-center justify-center md:gap-4 gap-1 md:text text-xs text-blue-900">
                    <div class="flex items-center justify-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-locate-fixed">
                        <line x1="2" x2="5" y1="12" y2="12"></line>
                        <line x1="19" x2="22" y1="12" y2="12"></line>
                        <line x1="12" x2="12" y1="2" y2="5"></line>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                        <circle cx="12" cy="12" r="7"></circle>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <p class=" line-clamp-2">
                        Institute of Engineering &amp;Management, <br />
                        Salt Lake, Kolkata <br />West Bengal, India
                        <!-- -->
                    </p>
                    </div>
                    <div class="w-full flex items-center justify-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-mail">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <p>icdc@iem.edu.in</p>
                    </div>
                    <div class="w-full flex items-center justify-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-phone">
                        <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                        </path>
                    </svg>
                    <p>+91 9674032480</p>
                    </div>
                    <div class="w-full flex items-center justify-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-phone">
                        <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                        </path>
                    </svg>
                    <p>+91 94334 95413</p>
                    </div>
                </div>
                </div>
                <div class="bg-blue-200 w-full text-center text-blue-900 pb-1 md:text text-sm">Copyright @2025 IEM-ICDC . All Rights
                Reserved. </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

addFooter();