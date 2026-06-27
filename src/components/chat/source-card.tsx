import { Fragment } from "react";

type SourceType = {
  source: string;
  page: string;
  doc_id: string;
};

export default function SourceCard({
  msgSources,
}: {
  msgSources: SourceType[];
}) {
  return (
    <div className="mt-4 rounded-2xl bg-cyan-900 p-4">
      <div className="flex items-center justify-between">
        <div>
          {msgSources &&
            msgSources.map((msgSrc: SourceType, i: number) => (
              <Fragment key={i}>
                <p className="text-lg font-medium text-gray-50">
                  {msgSrc.source}
                </p>
                <p className="mt-1 text-xs text-gray-100">
                  {/* Page 12 · Confidence High */}
                  Page {msgSrc.page}
                </p>
              </Fragment>
            ))}
        </div>

        <div className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs text-gray-50">
          Citation
        </div>
      </div>

      {/* <p className="mt-4 text-sm leading-7 text-gray-200">
        Enterprise subscription growth increased significantly in Q4,
        contributing to overall annual revenue expansion.
      </p> */}
    </div>
  );
}
