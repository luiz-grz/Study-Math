// Header scroll effects
let lastScrollTop = 0;
const header = document.getElementById('main-header');
const heroSection = document.querySelector('.bg-gradient-to-br');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add/remove scrolled class for background effects
  if (scrollTop > 50) {
    header.classList.add('scrolled');
    header.classList.remove('at-top');
  } else {
    header.classList.remove('scrolled');
    header.classList.add('at-top');
  }

  // Hide/show header on scroll direction (optional smooth effect)
  if (scrollTop > lastScrollTop && scrollTop > 200) {
    // Scrolling down - slight hide effect
    header.style.transform = 'translateY(-2px)';
  } else {
    // Scrolling up or at top
    header.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  // Dynamic shadow based on scroll position
  const shadowOpacity = Math.min(scrollTop / 200, 0.3);
  header.style.boxShadow = `0 4px 20px rgba(0, 0, 0, ${shadowOpacity})`;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = header.offsetHeight;
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Add some interactive effects to nav links
const navLinks = document.querySelectorAll('#main-header nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.05) translateY(-1px)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1) translateY(0)';
  });
});

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

function scrollToContact() {
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
}

// Modal functions
function openEnrollmentModal() {
  document.getElementById('enrollmentModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeEnrollmentModal() {
  document.getElementById('enrollmentModal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('enrollmentModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeEnrollmentModal();
  }
});

// Child management functions
let childCounter = 1;

function addChild() {
  childCounter++;
  const childrenContainer = document.getElementById('childrenContainer');

  const childDiv = document.createElement('div');
  childDiv.className = 'child-info bg-white p-4 rounded-xl mb-4';
  childDiv.setAttribute('data-child', childCounter);

  childDiv.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <h5 class="font-bold text-gray-800">Criança</h5>
      <button type="button" onclick="removeChildEntry(this)" class="text-red-500 hover:text-red-700 text-sm">Remover</button>
    </div>
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label class="text-gray-700 font-bold text-sm">Nome da Criança *</label>
        <input type="text" name="childName[]" required class="mt-2 w-full h-12 rounded-xl border-2 px-4 text-base" placeholder="Nome completo" />
      </div>
      <div>
        <label class="text-gray-700 font-bold text-sm">Idade *</label>
        <input type="number" name="childAge[]" required min="5" max="18" class="mt-2 w-full h-12 rounded-xl border-2 px-4 text-base" placeholder="8" />
      </div>
    </div>
    <div class="mt-4">
      <label class="text-gray-700 font-bold text-sm">Ano/Série *</label>
      <select name="childGrade[]" required class="mt-2 w-full h-12 rounded-xl border-2 px-4 text-base">
        <option value="">Selecione o ano</option>
        <option value="6º ano">6º ano do Ensino Fundamental</option>
        <option value="7º ano">7º ano do Ensino Fundamental</option>
        <option value="8º ano">8º ano do Ensino Fundamental</option>
        <option value="9º ano">9º ano do Ensino Fundamental</option>
        <option value="1º ano EM">1º ano do Ensino Médio</option>
        <option value="2º ano EM">2º ano do Ensino Médio</option>
        <option value="3º ano EM">3º ano do Ensino Médio</option>
      </select>
    </div>
    <div class="mt-4">
      <label class="text-gray-700 font-bold text-sm">Matérias com dificuldade</label>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
        <label class="flex items-center"><input type="checkbox" name="childSubjects${childCounter}[]" value="Matemática" class="mr-2"><span class="text-sm">Matemática</span></label>
        <label class="flex items-center"><input type="checkbox" name="childSubjects${childCounter}[]" value="Português" class="mr-2"><span class="text-sm">Português</span></label>
        <label class="flex items-center"><input type="checkbox" name="childSubjects${childCounter}[]" value="Ciências" class="mr-2"><span class="text-sm">Ciências</span></label>
        <label class="flex items-center"><input type="checkbox" name="childSubjects${childCounter}[]" value="História" class="mr-2"><span class="text-sm">História</span></label>
        <label class="flex items-center"><input type="checkbox" name="childSubjects${childCounter}[]" value="Geografia" class="mr-2"><span class="text-sm">Geografia</span></label>
        <label class="flex items-center"><input type="checkbox" name="childSubjects${childCounter}[]" value="Inglês" class="mr-2"><span class="text-sm">Inglês</span></label>
      </div>
    </div>
  `;

  childrenContainer.appendChild(childDiv);
}

function removeChildEntry(button) {
  const childDiv = button.closest('.child-info');
  childDiv.remove();
}

// Enrollment Form Submission
function submitEnrollment(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  let message = 'Olá! Gostaria de agendar uma aula experimental na Study Math.\n\n';

  message += `*Responsável:* ${formData.get('parentName')}\n`;
  message += `*Contato:* ${formData.get('parentPhone')}\n`;
  if (formData.get('parentEmail')) message += `*Email:* ${formData.get('parentEmail')}\n`;

  const childDivs = document.querySelectorAll('.child-info');
  childDivs.forEach((div) => {
    const name = div.querySelector('input[name="childName[]"]').value;
    const age = div.querySelector('input[name="childAge[]"]').value;
    const grade = div.querySelector('select[name="childGrade[]"]').value;
    const checkedSubjects = Array.from(div.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    
    message += `\n----------------------------------\n`;
    message += `*Aluno(a):* ${name} (${age} anos)\n*Série:* ${grade}\n`;
    if (checkedSubjects.length > 0) message += `*Dificuldades:* ${checkedSubjects.join(', ')}\n`;
  });

  message += `\n----------------------------------\n`;
  if (formData.get('preferredTime')) message += `*Horário preferido:* ${formData.get('preferredTime')}\n`;
  if (formData.get('howDidYouKnow')) message += `*Conheceu via:* ${formData.get('howDidYouKnow')}\n`;
  if (formData.get('observations')) message += `*Obs:* ${formData.get('observations')}\n`;
  message += '\n*Aguardo o retorno!*';

  window.open(`https://wa.me/5521995982987?text=${encodeURIComponent(message)}`, '_blank');
  closeEnrollmentModal();
  event.target.reset();
  
  // Reset children
  childCounter = 1;
  const childrenContainer = document.getElementById('childrenContainer');
  const extraChildren = childrenContainer.querySelectorAll('.child-info:not([data-child="1"])');
  extraChildren.forEach(child => child.remove());
}

// Contact Form Submission
function submitContact(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  
  const msg = `Olá! Gostaria de mais informações sobre o reforço escolar.\n\n` +
    `*Nome:* ${formData.get('name')}\n` +
    `*Email:* ${formData.get('email')}\n` +
    `*Telefone:* ${formData.get('phone')}\n` +
    `*Criança:* ${formData.get('childName')} (${formData.get('childAge')} anos)\n` +
    `*Mensagem:* ${formData.get('message')}`;

  window.open(`https://wa.me/5521995982987?text=${encodeURIComponent(msg)}`, '_blank');
  event.target.reset();
}

// Theme Toggle Logic
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  
  // Check saved theme or system preference
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let isDark = storedTheme === "dark" || (!storedTheme && prefersDark);

  function updateThemeUI() {
    if (isDark) {
      document.documentElement.classList.add("dark");
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    } else {
      document.documentElement.classList.remove("dark");
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  }

  // Initial set
  updateThemeUI();

  // Toggle handler
  themeToggleBtn.addEventListener('click', () => {
    isDark = !isDark;
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeUI();
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Enrollment Form
  const enrollmentForm = document.getElementById('enrollmentForm');
  if (enrollmentForm) {
    enrollmentForm.addEventListener('submit', submitEnrollment);
  }

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', submitContact);
  }

  // Theme
  try {
    initTheme();
  } catch (e) {
    console.log("Erro ao carregar tema (pode ser restrição de arquivo local):", e);
  }

  // Fun Gallery
  initFunGallery();
});

// Interactive Fun Gallery Logic
function initFunGallery() {
    const galleryContainer = document.getElementById('fun-gallery-container');
    if (!galleryContainer) return;

    // Limpa container
    galleryContainer.innerHTML = '';

    const baseImages = [
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.43 (1).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.43 (2).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.43.jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.44 (1).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.44 (2).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.44 (3).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.44 (4).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.44.jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.45 (1).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.45 (2).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.45 (3).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.45 (4).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.45 (5).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.45.jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.46.jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.47 (1).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.47 (2).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.47 (3).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.47 (4).jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.47.jpeg',
        'src/imagens/WhatsApp Image 2026-01-20 at 17.25.48.jpeg',
    ];

    // Duplica as imagens para a lista ficar longa e divertida de rolar
    const images = [...baseImages, ...baseImages].map(path => {
        const normalized = path.replace(/\\/g, '/');
        return encodeURI(normalized);
    });

    images.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'fun-gallery-item';
        
        // Gera rotação aleatória entre -6 e 6 graus
        const rotation = Math.random() * 12 - 6;
        // Gera delay aleatório para que as fotos não flutuem juntas
        const delay = Math.random() * -5;
        
        item.style.setProperty('--rotation', `${rotation}deg`);
        item.style.setProperty('--delay', `${delay}s`);
        
        item.innerHTML = `<img src="${src}" alt="Foto da galeria ${index + 1}" loading="lazy" draggable="false">`;
        galleryContainer.appendChild(item);
    });

    // --- Lógica de Arrastar (Drag to Scroll) Robusta ---
    let isDown = false;
    let startX;
    let scrollLeft;

    galleryContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        galleryContainer.classList.add('active');
        startX = e.pageX - galleryContainer.offsetLeft;
        scrollLeft = galleryContainer.scrollLeft;
    });

    galleryContainer.addEventListener('mouseleave', () => {
        isDown = false;
        galleryContainer.classList.remove('active');
    });

    galleryContainer.addEventListener('mouseup', () => {
        isDown = false;
        galleryContainer.classList.remove('active');
    });

    galleryContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - galleryContainer.offsetLeft;
        const walk = (x - startX) * 2; // Multiplicador de velocidade
        galleryContainer.scrollLeft = scrollLeft - walk;
    });

    // Permite scroll horizontal com a roda do mouse (Desktop)
    galleryContainer.addEventListener('wheel', (evt) => {
        if (evt.deltaY !== 0) {
            evt.preventDefault();
            galleryContainer.scrollLeft += evt.deltaY;
        }
    });
}