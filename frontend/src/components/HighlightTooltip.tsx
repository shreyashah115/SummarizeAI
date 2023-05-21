import { Summary } from "./Summary";
import { Popper } from "./Popper";

type TooltipProps = {
  selectedText: string;
  anchorEl: DOMRect | null;
  isExtensionEnabled: boolean;
};

export const HighlightTooltip: React.FC<TooltipProps> = ({
  selectedText,
  anchorEl,
  isExtensionEnabled,
}) => {
  return (
    <>
      {selectedText && isExtensionEnabled && (
        <Popper id="tooltip-container" anchorEl={anchorEl}>
          <Summary message={selectedText} />
        </Popper>
      )}
    </>
  );
};
