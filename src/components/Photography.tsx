import SectionWrapper from './SectionWrapper';

const photos = [
  { id: 1, ratio: 'aspect-[3/4]' },
  { id: 2, ratio: 'aspect-[4/3]' },
  { id: 3, ratio: 'aspect-square' },
  { id: 4, ratio: 'aspect-[4/3]' },
  { id: 5, ratio: 'aspect-[3/4]' },
  { id: 6, ratio: 'aspect-square' },
];

export default function Photography() {
  return (
    <SectionWrapper id="photography">
      <p className="mono-label mb-3">Photography</p>
      <h2 className="mb-12 text-3xl font-bold sm:text-4xl">Photography</h2>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-lg border border-border bg-surface ${photo.ratio}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-sm text-muted/40">
                {String(photo.id).padStart(2, '0')}
              </span>
            </div>
            <span className="absolute bottom-3 left-3 rounded bg-bg/70 px-2 py-1 font-mono text-[10px] text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              &copy; Ann B.
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
