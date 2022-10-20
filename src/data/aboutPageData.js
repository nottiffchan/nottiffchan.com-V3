export const srConfig = {
  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

export const aboutPara = `
  Hi! I'm Tiffany, and I'm a senior at the National University of Singapore, majoring in <b>Computer Science</b> with a minor in <b>Interactive Media Development</b>.

  <br />
  <br />

  I’m currently a <b>Product Design Intern with Grab</b>. I also have experience as a Product Designer and Software Engineer at a number of startups where I've always championed good user experiences, as well as being an <b>Undergrad Teaching Assistant for Interaction Design</b> in NUS.

  <br />
  <br />

  I'm currently looking for full-time design roles after graduating in December 2022.

  <br />
  <br />
  My design process is inspired by my background in both engineering
  and design, I love connecting the dots between business goals,
  technical constraints and user satisfaction. This year, my goal is to explore animation and motion design.
</p>
`;
