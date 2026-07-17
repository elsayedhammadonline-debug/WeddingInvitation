// ===============================
// Wedding Invitation
// السيد ❤ آية
// ===============================

const seal = document.getElementById("seal");
const invitation = document.getElementById("invitation");
const intro = document.getElementById("intro");

const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");

seal.addEventListener("click", openInvitation);

function openInvitation() {

    seal.style.pointerEvents = "none";

    // اختفاء الختم

    seal.animate([
        {
            transform: "translate(-50%,-50%) scale(1)"
        },
        {
            transform: "translate(-50%,-50%) scale(1.4)",
            opacity: 0
        }

    ], {

        duration: 600,
        fill: "forwards"

    });

    // فتح الباب

    setTimeout(() => {

        leftDoor.style.transformOrigin = "left";
        rightDoor.style.transformOrigin = "right";

        leftDoor.style.transform = "perspective(1200px) rotateY(-110deg)";
        rightDoor.style.transform = "perspective(1200px) rotateY(110deg)";

    }, 500);

    // ظهور الدعوة

    setTimeout(() => {

        intro.style.display = "none";

        invitation.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        animateItems();

    }, 2800);

}
const light = document.querySelector(".light");

setTimeout(() => {

    light.style.transition = "1.5s";

    light.style.opacity = "1";

    light.style.width = "1200px";

},900);