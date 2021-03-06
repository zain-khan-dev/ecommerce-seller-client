/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {Link} from "react-router-dom"
import {FC} from "react"

const classNames = (...classes:any[]) => {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  items:any[]
}

export default function Example({items}:Props):JSX.Element {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md  shadow-sm  text-md font-medium ">
          {items[0].name}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 m-2" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        {items.map((item)=>(
          <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to={item.link}><span
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-md'
                    )}
                  >
                      {item.name}
                  </span></Link>
                )}
              </Menu.Item>
          </div>
        ))}
      </Menu.Items>
      </Transition>
    </Menu>
  )
}