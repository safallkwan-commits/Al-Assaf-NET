// التعامل مع نموذج تسجيل الدخول
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            
            // تغيير نص الزر أثناء المعالجة
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري المعالجة...';
            btn.disabled = true;
            btn.style.opacity = '0.7';
            
            // محاكاة طلب الخادم
            setTimeout(() => {
                // إعادة تعيين الزر
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.style.opacity = '1';
                
                // عرض رسالة نجاح
                alert('تم تسجيل الدخول بنجاح! استمتع بالإنترنت السريع.');
                
                // مسح المدخلات
                loginForm.reset();
            }, 2000);
        });
    }
});

// تحسينات أداء للأجهزة المحمولة
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// دعم الوضع الليلي والفاتح
function setupTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    function handleThemeChange(e) {
        if (e.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
    
    // تطبيق الموضوع الأولي
    handleThemeChange(prefersDark);
    
    // الاستماع للتغييرات
    prefersDark.addEventListener('change', handleThemeChange);
}

setupTheme();