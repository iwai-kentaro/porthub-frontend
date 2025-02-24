type ProjectType = {
  id?: number;
  title: string;
  description: string;
  tag: string[];
  portfolio_url: string;
  image: File | undefined;
  user_id: number;
};

export default ProjectType;
