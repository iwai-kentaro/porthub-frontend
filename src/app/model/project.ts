import ProjectType from "@/app/types/Project";

class Project {
  constructor(
    public id: number | undefined,
    public title: string,
    public description: string,
    public tag: string[],
    public portfolioUrl: string,
    public image: File | undefined,
    public userId: number
  ) {}

  static buildFromJson = (json: ProjectType) => {
    return new Project(
      json.id,
      json.title,
      json.description,
      json.tag,
      json.portfolio_url,
      json.image,
      json.user_id
    );
  };
}

export default Project;
