function load() {
  new Swal({
    title: "",
    text: "Eu",
    icon: "info",
    dangerMode: true,
  }).then((_) => {
    new Swal({
      title: "",
      text: "Tu",
      icon: "warning",
      dangerMode: true,
    }).then((_) => {
      new Swal({
        title: "",
        text: "Nós",
        icon: "success",
        dangerMode: true,
      }).then((_) => {
        new Swal({
          title: "",
          text: "Para sempre",
          icon: "question",
          showConfirmButton: true,
          showDenyButton: true,
          confirmButtonText: "Sim",
          denyButtonText: "Não",
          timer: 3000,
          timerProgressBar: true,
        }).then((time) => {
          console.log(time);
          if (time.isConfirmed) {
            new Swal({
              title: "",
              text: "Eu te amo para sem sempre",
              icon: "success",
              timer: 3000,
              timerProgressBar: true,
            }).then((_) => {
              window.location.href =
                "https://memegenerator.net/img/instances/82001237/eu-te-amo-muito.jpg";
            });
          } else {
            document.getElementById(
              "switch"
            ).innerHTML = `<input type="checkbox" onclick="load()"/>
            <span class="slider"></span>`;
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "error",
              title: "Pensei que você me amava...",
            });
          }
        });
      });
    });
  });
}
