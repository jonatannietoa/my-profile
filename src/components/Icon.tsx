import {
  Mail,
  Linkedin,
  Github,
  Globe,
  MapPin,
  type LucideIcon,
} from 'lucide-react'
import type { ContactLink } from '@/data/profile'

const map: Record<ContactLink['icon'], LucideIcon> = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  globe: Globe,
  map: MapPin,
}

export function ContactIcon({
  name,
  className,
}: {
  name: ContactLink['icon']
  className?: string
}) {
  const Cmp = map[name]
  return <Cmp className={className} aria-hidden />
}
