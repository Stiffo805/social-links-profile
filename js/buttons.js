const navButtons = [
  {
    buttonText: "GitHub",
    targetUrl: "https://github.com/Stiffo805",
  },
  {
    buttonText: "Frontend Mentor",
    targetUrl: "https://www.frontendmentor.io/profile/Stiffo805",
  },
  {
    buttonText: "LinkedIn",
    targetUrl: "https://www.linkedin.com/feed/",
  },
  {
    buttonText: "Twitter",
    targetUrl: "https://x.com/?lang=en",
  },
  {
    buttonText: "Instagram",
    targetUrl: "https://www.instagram.com/",
  },
];

window.onload = () => {
  const container = document.querySelector('.social-media-nav');

  navButtons.forEach((button) => {
    const buttonTemplate = document.querySelector("#nav-button-template");
    const templateClone = buttonTemplate.content.cloneNode(true);

    const buttonElement = templateClone.querySelector('.nav-button');
    const anchorElement = templateClone.querySelector('.nav-button-anchor');
    buttonElement.textContent = button.buttonText;
    anchorElement.href = button.targetUrl;

    container.appendChild(templateClone);
  });
};
