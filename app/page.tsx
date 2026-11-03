// oxlint-disable react-doctor/nextjs-missing-metadata react/purity
import { EntryCard } from '@/components/entry-card'
import { Gallery, GalleryImage } from '@/components/gallery'
import { Grid, GridItem } from '@/components/grid'
import { List, ListItem } from '@/components/list'
import { PartnerLink } from '@/components/partner-link'
import { Section } from '@/components/section'
import { SocialLink } from '@/components/social-link'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/cn'
import { contributions } from '@/registry/contributions'
import { externalLinks } from '@/registry/external-links'
import { coreMetadata } from '@/registry/metadata'
import { socialNetworks } from '@/registry/social-networks'
import { tools } from '@/registry/tools'
import { works } from '@/registry/works'
import { copyright } from '@/utils/copyright'

export default async function Page() {
  const displayCopyright = await copyright()

  return (
    <main className='mx-auto w-full max-w-98 overflow-x-visible px-4 py-16'>
      <header className='mb-3 flex w-full flex-col items-start text-left'>
        <Avatar
          className='mb-4'
          size='lg'
        >
          <AvatarImage
            src={coreMetadata.logo}
            alt={coreMetadata.title}
            className='object-cover'
            width={64}
            draggable={false}
            height={64}
          />
          <AvatarFallback>MF</AvatarFallback>
        </Avatar>
        <h1 className='text-2xl font-semibold tracking-tight text-inherit'>
          {coreMetadata.title}
        </h1>
      </header>
      <Section>
        <List>
          {socialNetworks.map((socialNetwork) => (
            <SocialLink
              href={socialNetwork.href}
              key={socialNetwork.id}
              data={socialNetwork}
            />
          ))}
        </List>
      </Section>
      <Section>
        <p className='text-muted-foreground text-left text-base leading-relaxed opacity-90'>
          I’m currently focused on building tools and developer
          experiences that make software development faster, smoother,
          and more enjoyable.
        </p>
      </Section>
      <Section>
        <List vertical>
          {externalLinks.map((externalLink) => (
            <ListItem key={externalLink.id}>
              <PartnerLink
                variant='outline'
                {...externalLink}
              >
                {externalLink.label}
              </PartnerLink>
            </ListItem>
          ))}
        </List>
      </Section>
      <Section title='Works'>
        <List vertical>
          {works.map((work) => {
            const hasMultipleItems =
              work.items && work.items.length > 1
            return (
              <ListItem key={work.ref}>
                <EntryCard
                  multipleItems={hasMultipleItems}
                  data={work}
                />
              </ListItem>
            )
          })}
        </List>
      </Section>
      <Section title='Contributions'>
        <List vertical>
          {contributions.map((contributing) => {
            const hasMultipleItems =
              contributing.items && contributing.items.length > 1

            return (
              <ListItem key={contributing.ref}>
                <EntryCard
                  multipleItems={hasMultipleItems}
                  data={contributing}
                />
              </ListItem>
            )
          })}
        </List>
      </Section>
      <Section title='Things that power my life'>
        <Grid className='grid-cols-2'>
          {tools.life.map((tool) => (
            <GridItem key={tool.ref}>
              <EntryCard data={tool} />
            </GridItem>
          ))}
        </Grid>
      </Section>
      <Section title='Things that power my apps'>
        <Grid className='grid-cols-2'>
          {tools.apps.map((tool) => (
            <GridItem key={tool.ref}>
              <EntryCard data={tool} />
            </GridItem>
          ))}
        </Grid>
      </Section>
      {/* <Section title='Writings'>
        <List vertical>
          {writings.map((writing) => (
            <ListItem key={writing.id}>
              <Link href={writing.href}>
                <Item className='min-h-12 gap-3 p-0'>
                  <ItemContent className='relative w-full justify-center *:text-sm'>
                    <div className='flex w-full min-w-0 items-baseline justify-between gap-3'>
                      <ItemTitle className='group-hover/item:underline'>
                        {writing.title}
                      </ItemTitle>

                      <span className='text-muted-foreground shrink-0 text-xs leading-normal tabular-nums'>
                        {new Date(
                          writing.releaseDate
                        ).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>

                    <div className='relative flex gap-1.5'>
                      <ItemDescription
                        className={cn(
                          'ml-0 line-clamp-2 select-none'
                        )}
                      >
                        {writing.description}
                      </ItemDescription>
                      <ItemMedia className='overflow-hidden rounded-full shadow-xs'>
                        <Image
                          src='/me.jpeg'
                          alt='/me.jpeg'
                          width={24}
                          draggable={false}
                          height={24}
                          className='mt-auto object-contain mix-blend-multiply'
                        />
                      </ItemMedia>
                    </div>
                  </ItemContent>
                </Item>
              </Link>
            </ListItem>
          ))}
        </List>
      </Section> */}
      <Section title='Gallery'>
        <Gallery>
          {Array.from({ length: 10 }).map((item, index) => (
            <GalleryImage
              src={`/gallery/portrait-${index + 1}.jpg`}
              className={cn('h-36', index % 2 && 'h-46')}
              key={index + 1}
              alt={`Image URL ${item}`}
            />
          ))}
        </Gallery>
      </Section>
      <Section>
        <Separator />
      </Section>
      <Section className='group relative'>
        <h4 className='text-muted-foreground text-xs leading-relaxed opacity-90'>
          {displayCopyright}
        </h4>
      </Section>
    </main>
  )
}
