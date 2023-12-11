import { FaBriefcase, FaCheck, FaExclamation } from "react-icons/fa";

export default function ProjectCard({ project }) {
    function setIcon(project){
        console.log(project.status);
        if(project.status === "Not Started"){
            return (
                <div className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-body light-red rounded">
                            <div className="d-flex justify-content-between align-items-center">
                                
                            <FaExclamation className="project-icon dark-red"/>
                                <h5 className="card-title">{project.name}</h5>

                                <a className="btn btn-light" href={`/projects/${project.id}`}>
                                    View
                                </a>
                            </div>
                            <p className="small card--status">
                                Status:<strong> {project.status}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            )            
        }
        else if(project.status === "Completed"){
            return (
                <div className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-body light-green rounded">
                            <div className="d-flex justify-content-between align-items-center">
                                
                            <FaCheck className="project-icon dark-green" />
                                <h5 className="card-title">{project.name}</h5>

                                <a className="btn btn-light" href={`/projects/${project.id}`}>
                                    View
                                </a>
                            </div>
                            <p className="small card--status">
                                Status:<strong> {project.status}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            )      
        }
        else if(project.status === "In Progress"){
            return (
                <div className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-body light-pruple rounded">
                            <div className="d-flex justify-content-between align-items-center">
                                
                            <FaBriefcase className="project-icon dark-purple" />
                                <h5 className="card-title">{project.name}</h5>

                                <a className="btn btn-light" href={`/projects/${project.id}`}>
                                    View
                                </a>
                            </div>
                            <p className="small card--status">
                                Status:<strong> {project.status}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }
  return (
    <>
        {setIcon(project)}
    </>
    
    
  )
}