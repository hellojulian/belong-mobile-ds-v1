import * as React from "react"
import { Search, LogIn, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const BelongLogo = () => (
  <svg aria-label="Belong logo" focusable="false" fill="#00C2FF" role="img" viewBox="0 0 144 24" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-36 h-9">
    <path fillRule="evenodd" clipRule="evenodd" d="M1 4H8.66102C10.5593 4 12.0169 4.52577 12.9661 5.50722C13.7119 6.27835 14.0847 7.22474 14.0847 8.41649V8.45155C14.0847 10.3794 13.1017 11.4309 11.9153 12.132C13.8136 12.9031 15 14.0247 15 16.3031V16.3381C15 19.4577 12.5593 21 8.83051 21H1V4ZM10.4915 9.04742C10.4915 7.92577 9.64407 7.29485 8.11864 7.29485H4.52542V10.9052H7.88136C9.47458 10.9052 10.4915 10.3794 10.4915 9.11753V9.04742ZM4.52542 13.9897H8.72881C10.5932 13.9897 11.4068 14.6907 11.4068 15.8474V15.8825C11.4068 17.1443 10.4237 17.7402 8.83051 17.7402H4.52542V13.9897Z"></path>
    <path d="M39 21H26.1054V17.677H35.2405V14.214H27.2297V10.8909H35.2757V7.32305H26V4H39V21Z"></path>
    <path d="M52 4H55.6791V17.607H64V21H52V4H52Z"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M72 12.5V12.5339C72 17.241 75.7602 21 80.9826 21C86.205 21 90 17.1733 90 12.5V12.4661C90 7.79283 86.2398 4 81.0174 4C75.795 4 72 7.82669 72 12.5ZM86.1006 12.5V12.5339C86.1006 15.3785 84.0116 17.6813 81.0174 17.6474C78.0232 17.6474 75.8994 15.2769 75.8994 12.4661V12.4323C75.8994 9.62151 77.9884 7.31873 80.9826 7.31873C83.9768 7.31873 86.1006 9.68924 86.1006 12.5Z"></path>
    <path d="M101 4H104.43L112.328 14.4588V4H116V21H112.848L104.707 10.1914V21H101.035V4H101Z"></path>
    <path d="M138.18 9.31673C138.11 8.97809 137.97 8.67331 137.794 8.40239C137.619 8.13147 137.374 7.89442 137.058 7.7251C136.778 7.52191 136.428 7.38645 136.042 7.28486C135.657 7.18327 135.236 7.1494 134.815 7.1494C133.484 7.1494 132.467 7.58964 131.766 8.50398C131.065 9.41833 130.75 10.739 130.75 12.4661C130.75 14.2271 131.065 15.5478 131.731 16.4622C132.397 17.3765 133.414 17.8167 134.745 17.8167C135.376 17.8167 135.902 17.749 136.357 17.5797C136.813 17.4104 137.199 17.2072 137.479 16.9363C137.759 16.6653 138.005 16.3606 138.145 16.0219C138.285 15.6833 138.355 15.3108 138.355 14.9721V14.1255H134.535V11.0438H142V14.2948C142 15.2092 141.86 16.0558 141.579 16.8685C141.299 17.6813 140.879 18.3924 140.283 19.002C139.687 19.6116 138.951 20.0857 138.005 20.4582C137.093 20.8307 136.007 21 134.71 21C133.449 21 132.327 20.7968 131.381 20.3904C130.435 19.9841 129.629 19.4084 128.963 18.6633C128.332 17.9183 127.841 17.0378 127.491 15.988C127.175 14.9382 127 13.7869 127 12.4661C127 11.1793 127.175 9.99402 127.491 8.97809C127.841 7.92829 128.332 7.04781 128.998 6.30279C129.664 5.55777 130.47 5.01594 131.416 4.60956C132.397 4.20319 133.484 4 134.745 4C135.762 4 136.708 4.13546 137.514 4.40637C138.355 4.67729 139.056 5.08367 139.652 5.55777C140.248 6.03187 140.738 6.60757 141.124 7.251C141.509 7.89442 141.755 8.60558 141.86 9.3506H138.18V9.31673Z"></path>
  </svg>
)

export default function BelongNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-white bg-black">
      <div className="container px-6 mx-auto">
        <div className="flex items-center h-20"> {/* Increased height from h-16 to h-20 */}
          <a href="/" className="flex-shrink-0 mr-8">
            <BelongLogo />
          </a>
          <div className="items-center flex-grow hidden space-x-6 md:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-2 text-lg text-white bg-transparent hover:bg-transparent focus:bg-transparent">
                    Internet Plans
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[ 500px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/internet/nbn" className="block p-3 space-y-1 leading-none no-underline transition-colors border border-transparent rounded-md outline-none select-none hover:text-sys-secondary focus:text-accent-foreground hover:border-sys-secondary">
                            <div className="font-medium leading-none text-sys-secondary text-md">NBN Plans</div>
                            <p className="text-sm leading-snug text-white line-clamp-2 text-muted-foreground">Fast and reliable NBN plans for your home.</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/internet/5g-home" className="block p-3 space-y-1 leading-none no-underline transition-colors border border-transparent rounded-md outline-none select-none hover:text-sys-secondary focus:text-accent-foreground hover:border-sys-secondary">
                            <div className="font-medium leading-none text-sys-secondary text-md">5G Home Internet</div>
                            <p className="text-sm leading-snug text-white line-clamp-2 text-muted-foreground">Ultra-fast 5G internet for your home.</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-2 text-lg text-white bg-transparent hover:bg-transparent focus:bg-transparent">
                    SIM Plans
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/sim/prepaid" className="block p-3 space-y-1 leading-none no-underline transition-colors border border-transparent rounded-md outline-none select-none hover:text-sys-secondary focus:text-accent-foreground hover:border-sys-secondary">
                            <div className="font-medium leading-none text-sys-secondary text-md">Prepaid Plans</div>
                            <p className="text-sm leading-snug text-white line-clamp-2 text-muted-foreground">Flexible prepaid plans with no lock-in contracts.</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/sim/postpaid" className="block p-3 space-y-1 leading-none no-underline transition-colors border border-transparent rounded-md outline-none select-none hover:text-sys-secondary focus:text-accent-foreground hover:border-sys-secondary">
                            <div className="font-medium leading-none text-sys-secondary text-md">Postpaid Plans</div>
                            <p className="text-sm leading-snug text-white line-clamp-2 text-muted-foreground">Great value postpaid plans with added benefits.</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="p-0 text-lg text-white bg-transparent font-proxima hover:bg-transparent focus:bg-transparent">
                    Phones
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="p-0 text-lg text-white bg-transparent font-proxima hover:bg-transparent focus:bg-transparent">
                    About Belong
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center ml-auto space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-2 text-lg text-white bg-transparent hover:bg-transparent focus:bg-transparent">
                    Help
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[200px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/support" className="block p-3 space-y-1 leading-none no-underline transition-colors border border-transparent rounded-md outline-none select-none hover:text-sys-secondary focus:text-accent-foreground hover:border-sys-secondary">
                            <div className="font-medium leading-none text-sys-secondary text-md">Support</div>
                            <p className="text-sm leading-snug text-white line-clamp-2 text-muted-foreground">Get help with your services</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/faqs" className="block p-3 space-y-1 leading-none no-underline transition-colors border border-transparent rounded-md outline-none select-none hover:text-sys-secondary focus:text-accent-foreground hover:border-sys-secondary">
                            <div className="font-medium leading-none text-sys-secondary text-md">FAQs</div>
                            <p className="text-sm leading-snug text-white line-clamp-2 text-muted-foreground">Frequently asked questions</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="ghost" className="p-0 text-lg text-white">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
            <Button variant="ghost" className="p-0 text-lg text-white">
              <LogIn className="w-5 h-5 mr-2" />
              Log in
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}