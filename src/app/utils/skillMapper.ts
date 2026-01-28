export interface SkillType {
  id: number;
  subType: string;
  icon: {
    url: string;
  } | null;
}

export interface SkillItem {
  id: number;
  name: string;
  types: SkillType[];
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export function mapSkills(data: any[]): SkillItem[] {
  return data.map((skill) => ({
    id: skill.id,
    name: skill.name,
    types: skill.types.map((type: any) => ({
      id: type.id,
      subType: type.subType,
      icon: type.icon ? { url: `${STRAPI_URL}${type.icon.url}` } : null,
    })),
  }));
}
