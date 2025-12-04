       // Mobile Navigation Toggle
        document.querySelector('.mobile-toggle').addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-menu').classList.remove('active');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            }
        });

        // Notice auto-scroll
        function autoScrollNotices() {
            const noticeList = document.querySelector('.notice-list');
            if (noticeList) {
                setInterval(() => {
                    const firstItem = noticeList.firstElementChild;
                    noticeList.appendChild(firstItem);
                }, 5000);
            }
        }

        // Initialize functions when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            autoScrollNotices();
        });