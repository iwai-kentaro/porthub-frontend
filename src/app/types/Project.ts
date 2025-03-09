type ProjectType = {
  id?: number;
  title: string;
  description: string;
  tag: string[];
  portfolio_url: string;
  image_url: string | File | undefined;
  user_id: number;
};

export default ProjectType;
