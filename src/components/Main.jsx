import { ProjectBox } from './ProjectBox.jsx';

export const Main = () => {
    return (
        <main>
            <section className="main-section">
                <h1 className="main-title">Full-Stack <br/> Web Developer</h1>
            </section>
            <section className="main-tecnologies">
                <img src="https://i.imgur.com/NfddCaX.png" alt="node.png" title="Node.JS"/>
                <img src="/public/img/express.png" alt="express.png" title="Express.JS"/>
                <img src="/public/img/react.png" alt="react.png" title="React.JS"/>
                <img src="/public/img/mysql.png" alt="mysql.png" title="MySQL"/>
                <img src="/public/img/sequelize.png" alt="sequelize.png" title="Sequelize.JS"/>
                <img src="/public/img/python.png" alt="python.png" title="Python"/>
                <img src="/public/img/jwt.png" alt="jwt.png" title="JSON Web Token"/>
                <img src="/public/img/html.png" alt="html.png" title="HTML5"/>
                <img src="/public/img/css.png" alt="css.png" title="CSS3"/>
                <img src="/public/img/javascript.png" alt="javascript.png" title="JavaScript"/>
            </section>
            <section className="main-projects">
                <ProjectBox title="Proyecto 1" subtitle="Subtítulo 1" description="Descripción 1" img="https://i.imgur.com/1zv3Z9I.png" link="https://www.google.com"/>
            </section>
        </main>
    )
}