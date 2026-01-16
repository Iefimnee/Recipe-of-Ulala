/* ===============================================
   Recipe of Ulala - JavaScript v2.0
   已删除：checkSuitability(), calculateSimilarity()
   已保留：toggleIngredient(), toggleFAQ()
   =============================================== */

// ======================
// 1. Toggle Ingredient Detail (成分展开/折叠)
// ======================
function toggleIngredient(ingredientId) {
    const detail = document.getElementById('detail-' + ingredientId);
    const btn = detail ? detail.previousElementSibling.querySelector('.ingredient-toggle') : null;
    
    if (!detail) {
        console.error('Ingredient detail not found:', ingredientId);
        return;
    }
    
    // Toggle display
    if (detail.style.display === 'none' || detail.style.display === '') {
        detail.style.display = 'block';
        if (btn) btn.textContent = '閉じる ▲';
    } else {
        detail.style.display = 'none';
        if (btn) btn.textContent = '詳しく ▼';
    }
    
    // Track event (optional)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'ingredient_click', {
            'ingredient_id': ingredientId
        });
    }
}

// ======================
// 2. Toggle FAQ (FAQ折叠)
// ======================
function toggleFAQ(faqId) {
    const answer = document.getElementById('faq-answer-' + faqId);
    const icon = document.getElementById('faq-icon-' + faqId);
    const item = answer ? answer.closest('.faq-item') : null;
    
    if (!answer) {
        console.error('FAQ answer not found:', faqId);
        return;
    }
    
    // Toggle display
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        if (icon) icon.textContent = '▲';
        if (item) item.classList.add('active');
    } else {
        answer.style.display = 'none';
        if (icon) icon.textContent = '▼';
        if (item) item.classList.remove('active');
    }
    
    // Track event (optional)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'faq_click', {
            'faq_id': faqId
        });
    }
}

// ======================
// 3. Form Validation Helper (表单验证 - 如果需要)
// ======================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ======================
// 4. Smooth Scroll to Element (平滑滚动 - 可选)
// ======================
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ======================
// 5. Initialize on Page Load (页面加载时初始化)
// ======================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Recipe of Ulala - Page loaded');
    
    // 可以在这里添加初始化代码
    // 例如：懒加载图片、设置默认状态等
});

// ======================
// 6. Mobile Menu Toggle (移动端菜单 - 如果需要)
// ======================
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (nav && menuToggle) {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }
}

// ======================
// End of Script
// ======================