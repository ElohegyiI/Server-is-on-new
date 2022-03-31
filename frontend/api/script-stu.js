


function loadEvent() {

    fetch("/api/students.json")

        .then(response => response.json())

            .then(data => {


                for (const student of data) {

                    document.getElementById("root").insertAdjacentHTML  ('beforeend', `
                    <div class="cards">
                        <h3>${student.id}</h3>
                        <h4>${student.name}</h4>
                        <p>${student.status}</p>                
                    `)
                }
            });

    

}window.addEventListener('load', loadEvent)
