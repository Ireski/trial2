// TECHSTAZ / IRESKITECH — Main JavaScript Logic File
/*

document.addEventListener("DOMContentLoaded", () => {
  // ===== LOADER LOGIC =====
  const word = "TECH STAZ";
  const row = document.getElementById("row");
  const loader = document.getElementById("loader");

  if (row) {
    row.innerHTML = ""; // Clear existing placeholder content if any
    word.split("").forEach((ch, i) => {
      const wrap = document.createElement("div");
      wrap.className = "letter-wrap";

      const stagger = i * 0.1;
      const appearDuration = 0.1;

      const top = document.createElement("span");
      top.className = "letter";
      top.textContent = ch;
      top.style.animationDelay = `${stagger}s, ${stagger + appearDuration}s`;
      top.style.animationDuration = `${appearDuration}s, 0.7s`;

      const ref = document.createElement("span");
      ref.className = "reflection";
      ref.textContent = ch;
      ref.style.animationDelay = `${stagger}s, ${stagger + appearDuration}s`;
      ref.style.animationDuration = `${appearDuration}s, 0.7s`;

      wrap.appendChild(top);
      wrap.appendChild(ref);
      row.appendChild(wrap);
    });
  }

  if (loader) {
    // Show loader immediately
    loader.classList.add("active");
    document.body.classList.add("no-scroll");

    // Hide loader after delay and enable scrolling
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.classList.remove("active");
        loader.style.display = "none";
        document.body.classList.remove("no-scroll");
      }, 2000); // reduced to 2s for snappier premium feel
    });

    // Fallback in case load event already fired or takes too long
    setTimeout(() => {
      if (loader.style.display !== "none") {
        loader.classList.remove("active");
        loader.style.display = "none";
        document.body.classList.remove("no-scroll");
      }
    }, 4000);
  } */

const word = "TECH STAZ";
const row = document.getElementById("row");

word.split("").forEach((ch, i) => {
  const wrap = document.createElement("div");
  wrap.className = "letter-wrap";

  const stagger = i * 0.1;
  const appearDuration = 0.1;

  const top = document.createElement("span");
  top.className = "letter";
  top.textContent = ch;
  top.style.animationDelay = `${stagger}s, ${stagger + appearDuration}s`;
  top.style.animationDuration = `${appearDuration}s, 0.7s`;

  const ref = document.createElement("span");
  ref.className = "reflection";
  ref.textContent = ch;
  ref.style.animationDelay = `${stagger}s, ${stagger + appearDuration}s`;
  ref.style.animationDuration = `${appearDuration}s, 0.7s`;

  wrap.appendChild(top);
  wrap.appendChild(ref);
  row.appendChild(wrap);
});

const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  setTimeout(() => {
    loader.classList.remove("active");
    loader.style.display = "none";
    document.body.style.overflowY = "scroll";
  }, 3000);
});

// show loader immediately on page load start
loader.classList.add("active");
document.body.style.overflowY = "hidden";

// ===== MOBILE MENU NAVIGATION =====
const mobileMenu = document.getElementById("mobile-nav");
const mobileBtn = document.getElementById("mobile-btn");
const mobileBack = document.getElementById("mobile-back");
const closeBtn = document.getElementById("close-btn");

const toggleMenu = () => {
  if (mobileMenu && mobileBack) {
    mobileMenu.classList.toggle("active");
    mobileBack.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  }
};

const closeMenu = () => {
  if (mobileMenu && mobileBack) {
    mobileMenu.classList.remove("active");
    mobileBack.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
};

if (mobileBtn) mobileBtn.addEventListener("click", toggleMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (mobileBack) mobileBack.addEventListener("click", closeMenu);

// Close menu when clicking navigation links inside mobile menu
if (mobileMenu) {
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// ===== NAVIGATION ACTIVE LINK TOGGLER =====
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ===== FAQ ACCORDION (details elements exclusive toggling) =====
const allDetails = document.querySelectorAll("details");
allDetails.forEach((details) => {
  details.addEventListener("toggle", () => {
    if (details.open) {
      allDetails.forEach((other) => {
        if (other !== details) {
          other.removeAttribute("open");
        }
      });
    }
  });
});

// ===== COURSE DROPDOWNS =====
const dropDown = document.getElementById("course-drop");
const dropDownContent = document.getElementById("course-drop-content");
if (dropDown && dropDownContent) {
  dropDown.addEventListener("click", () => {
    dropDownContent.classList.toggle("hidden");
    dropDownContent.classList.toggle("grid");
  });
}

const dataDropDown = document.getElementById("data-drop");
const dataDropDownContent = document.getElementById("data-drop-content");
if (dataDropDown && dataDropDownContent) {
  dataDropDown.addEventListener("click", () => {
    dataDropDownContent.classList.toggle("hidden");
    dataDropDownContent.classList.toggle("grid");
  });
}

// ===== SCROLL REVEAL INTERSECTION OBSERVER =====
const revealEls = document.querySelectorAll(".reveal, .scroll-reveal");
if (revealEls.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );
  revealEls.forEach((el) => observer.observe(el));
}

// ===== SCROLL PROGRESS BAR AND HEADER STATE =====
const progressBar = document.getElementById("progress-bar");
const header =
  document.getElementById("header") || document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  // Scroll progress bar
  if (progressBar) {
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + "%";
  }

  // Header scroll background effect
  if (header) {
    if (scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// ===== SMOOTH SCROLL FOR INTERNAL ANCHORS =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const hrefAttr = this.getAttribute("href");
    if (hrefAttr === "#" || hrefAttr === "") return;

    const target = document.querySelector(hrefAttr);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ===== GSAP SCROLL ANIMATION =====
if (typeof gsap !== "undefined") {
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Hero element stagger fade in
  gsap.from(".hero-content > *", {
    duration: 0.8,
    y: 40,
    opacity: 0,
    stagger: 0.15,
    ease: "power3.out",
    delay: 0.3,
  });

  // Reveal items on scroll using GSAP as well
  document
    .querySelectorAll(".fade-up, .slide-left, .slide-right")
    .forEach((el) => {
      const isLeft = el.classList.contains("slide-left");
      const isRight = el.classList.contains("slide-right");
      const startX = isLeft ? -30 : isRight ? 30 : 0;

      gsap.fromTo(
        el,
        { x: startX, y: startX === 0 ? 30 : 0, opacity: 0 },
        {
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
            toggleActions: "play none none none",
          },
          duration: 0.8,
          x: 0,
          y: 0,
          opacity: 1,
          ease: "power3.out",
        },
      );
    });
}
// });

// ===== CONTACT FORM UTILITIES (Exposed to Global Scope) =====

window.selectChip = function (el, service) {
  document
    .querySelectorAll(".chip")
    .forEach((c) => c.classList.remove("active"));
  el.classList.add("active");
  const sel = document.getElementById("serviceSelect");
  if (sel) {
    for (let i = 0; i < sel.options.length; i++) {
      if (
        sel.options[i].text
          .toLowerCase()
          .includes(service.split(" ")[0].toLowerCase())
      ) {
        sel.selectedIndex = i;
        break;
      }
    }
  }
};

window.selectBudget = function (btn) {
  document
    .querySelectorAll(".budget-btn")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
};

window.submitForm = function () {
  const firstNameEl = document.getElementById("firstName");
  const lastNameEl = document.getElementById("lastName");
  const emailEl = document.getElementById("emailInput");
  const phoneEl = document.getElementById("phoneInput");
  const serviceEl = document.getElementById("serviceSelect");
  const messageEl = document.getElementById("messageInput");

  if (!firstNameEl || !emailEl || !messageEl || !serviceEl) return;

  const fn = firstNameEl.value.trim();
  const em = emailEl.value.trim();
  const msg = messageEl.value.trim();
  const svc = serviceEl.value;

  if (!fn || !em || !msg || !svc) {
    // Shake invalid fields
    [firstNameEl, emailEl, messageEl, serviceEl].forEach((f) => {
      if (!f.value.trim()) {
        f.style.borderColor = "#e05252";
        f.style.animation = "shake .4s ease";
        setTimeout(() => {
          f.style.animation = "";
          f.style.borderColor = "";
        }, 600);
      }
    });
    return;
  }

  const btn = document.querySelector(".submit-btn");
  const btnText = document.getElementById("btnText");
  if (btnText) btnText.textContent = "⏳ Sending...";
  if (btn) btn.disabled = true;

  // Compose mailto link
  const subject = encodeURIComponent(`IreskiTech Enquiry: ${svc}`);
  const phone = phoneEl ? phoneEl.value || "Not provided" : "Not provided";
  const last = lastNameEl ? lastNameEl.value : "";
  const body = encodeURIComponent(
    `Name: ${fn} ${last}\nEmail: ${em}\nPhone: ${phone}\nService: ${svc}\n\nMessage:\n${msg}`,
  );

  setTimeout(() => {
    window.location.href = `mailto:ireskie@gmail.com?subject=${subject}&body=${body}`;
    const formContent = document.getElementById("formContent");
    const successState = document.getElementById("successState");
    if (formContent) formContent.style.display = "none";
    if (successState) successState.style.display = "block";
  }, 800);
};

// ===== CURRICULUM TABS & MODULES (Exposed to Global Scope) =====

window.switchTab = function (tab) {
  document
    .querySelectorAll(".curriculum-tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".curriculum-panel")
    .forEach((p) => p.classList.remove("active"));

  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add("active");
  } else if (window.event && window.event.target) {
    window.event.target.classList.add("active");
  }

  const panel = document.getElementById("tab-" + tab);
  if (panel) panel.classList.add("active");
};

window.toggleModule = function (card) {
  const body = card.querySelector(".module-body");
  const icon = card.querySelector(".fa-chevron-down");
  if (body) {
    const isOpen = body.style.display === "block";
    body.style.display = isOpen ? "none" : "block";
    if (icon) {
      icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
    }
  }
};
