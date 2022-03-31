




    fetch("/api/students.json")

        .then(response => response.json())

            .then(data => {


                for (const student of data) {

                    document.getElementById("root").insertAdjacentHTML  ('beforeend', `
                    <div class="cards">
                        <h2>${student.id}</h2>
                        <p>${student.name}</p>
                        <p>${student.status}</p>                
                    `)
                }
            });
