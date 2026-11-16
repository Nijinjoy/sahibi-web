import { CategoryNav } from "./header/category-nav";
import { HeaderBrand } from "./header/header-brand";
import { HeaderActions } from "./header/header-actions";
import { SearchBar } from "./header/search-bar";

export function SiteHeader({ showMobileSearch = true }: { showMobileSearch?: boolean }) {
  return (
    <header className="sticky top-0 z-40 bg-background/85 md:border-b md:border-border backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 md:gap-6">
        <HeaderBrand />
        <SearchBar className="hidden max-w-2xl md:block" />
        <div className="ml-auto">
          {/* TODO: pass real cart count once the cart feature exists */}
          <HeaderActions cartCount={0} />
        </div>
      </div>
      {showMobileSearch && (
        <div className="px-4 pb-3 md:hidden">
          <SearchBar />
        </div>
      )}
      <CategoryNav />
    </header>
  );
}
