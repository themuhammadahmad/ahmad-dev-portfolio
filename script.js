  document.addEventListener('DOMContentLoaded', function() {
            const themeButtons = document.querySelectorAll('.theme-btn');
            const body = document.body;
            
            themeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const theme = this.classList.contains('light') ? '' : 
                                  this.classList.contains('dark') ? 'dark-theme' : 'blue-theme';
                    
                    // Remove all theme classes
                    body.classList.remove('dark-theme', 'blue-theme');
                    
                    // Add selected theme class
                    if (theme) {
                        body.classList.add(theme);
                    }
                    
                    // Save theme preference to localStorage
                    localStorage.setItem('portfolio-theme', theme);
                });
            });
            
            // Load saved theme from localStorage
            const savedTheme = localStorage.getItem('portfolio-theme');
            if (savedTheme) {
                body.classList.add(savedTheme);
            }
            
// Project filtering functionality
const categoryButtons = document.querySelectorAll('.category-btn');
const projectCards = document.querySelectorAll('.project-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        // Show/hide projects based on category
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Optional: Add a smooth fade animation
        projectCards.forEach(card => {
            if (card.style.display === 'block') {
                card.style.opacity = '0';
                card.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            }
        });
    });
});
            
            // Set current year in footer
            document.getElementById('currentYear').textContent = new Date().getFullYear();
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });