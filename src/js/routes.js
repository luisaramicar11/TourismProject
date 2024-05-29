// En este archivo existe para darle soporte al renderizado del contenido que se muestra al cambiar entre las distintas 
//rutas que se pueden visitar en la página web

export const routes = () => {
    // 1. Función para cargar el contenido de los archivos html que se cargan al cambiar las rutas
    const loadHtml = async (path) => {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`Error al cargar ${path}`);
            }
            return await response.text();
            
        } catch (error) {
            console.error(error);
            return "<h2>Error</h2><p>Lo sentimos, hubo un problema al cargar la página.</p>";
        }
    };
    
    // 2. Se definen las rutas que se visitarán en la página
       // Se crea un función asíncrona
       // En routes se guarda un areglo donde esta almacena cada ruta en un objeto. Cada ruta contiene la dirección
       // de la rura (path) y una llave llamada view que carga la función loadHtml descrita en el paso 1.
    const router = async () => {
        const routes = [
            { path: "/", view: () => loadHtml('./src/pages/home.html')  },
            { path: "/acerca", view: () => loadHtml('./src/pages/Nosotros.html') },
            { path: "/comunidades", view: () => loadHtml('./src/pages/Comunidades.html') },
            { path: "/turismo", view: () => loadHtml('./src/pages/plansTourism.html') },
            { path: "/signin", view: () => loadHtml('./src/pages/signin.html') },
            { path: "/signup", view: () => loadHtml('./src/pages/signup.html') },
            { path: "/404", view: () => loadHtml('./src/pages/error404.html')},
            { path: "/plans", view: () => loadHtml('./src/pages/planCommunity.html')},
            { path: "/dashboard", view: () => loadHtml('./src/pages/dashboard.html')},
            { path: "/pagoexitoso", view: () => loadHtml('./src/pages/stripe-success.html')},
            { path: "/pagonegado", view: () => loadHtml('./src/pages/stripe-cancel.html')}
        ];
    
        // A partir de routes se realiza un map, donde para cada ruta se crea un objeto que contiene la información original (path y view) en
        // la llave route, y otra llave llamada isMatch que almacenara un valor boolean dependiendo de si la ruta en cuestión
        // coincide con la que se esta cargando como vista al usuario. Lo anterior se almacena en la variable potencialMatches
        const potentialMatches = routes.map(route => {
            return {
                route,
                isMatch: location.pathname === route.path
            };
        });
        console.log(potentialMatches)
        
        // Se busca en la variable potencialMatches la ruta que coincida con la que se esta cargando como vista al usuario. Lo anterior
        // se hace revisando donde el valor de la llave isMatch es true
        let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
        console.log(match)
        
        // Si no se encuentra ninguna ruta que coincida con la que se esta cargando como vista al usuario, entonces se carga la ruta
        // por defecto, que en este caso es la ruta 404, que en el arreglo de rutas esta en la posición 3
        if (!match) {
            match = {
                route: routes[6],
                isMatch: true
            };
        }
    
        // Se consulta la información de la variable match y de allí se ingresa a la llave route (que almacena a path y view) y se consulta view 
        // que recordemos tiene la función flecha que renderiza la vista de la página que se esta visitando
        const view = await match.route.view();
    
        // Se inserta el contenido de la vista en el elemento con el id app
        document.querySelector("#app").innerHTML = view

    };
    
    // navigateTo es una función flecha que renderiza la vista de la página al acceder al objeto history y al método pushState 
    // (el primer parámetro es para acceder al estado, el segundo al título del estado y el tercero a la url). Finalmentem se invoca
    // la función router
    
    const navigateTo = url => {
        history.pushState(null, null, url);
        router();
    };
    
    // evento del window que se dispara cuando la url cambia debido a una acción del usuario que involucra el historial del navegador

    window.addEventListener("popstate", router);
    
    //evento que se dispara cuando el documento html ha sido completamente cargado. Escuchara los clcick que se dan el body y que coinciden
    // con los elementos que tiene el data attribute 'data-link', que son las etiquetas a en el header. Luego de acceder a la etiqueta
    // a accede al atributo href de la misma, y pasa esta como arguemnto en la función navegateTo
    document.addEventListener("DOMContentLoaded", () => {
        document.body.addEventListener("click", e => {
            if (e.target.matches("[data-link]")) {
                console.log("click")
                e.preventDefault();
                navigateTo(e.target.href);
            }
        });
        router();
    });
    }

