"use client";
import React from 'react'
import { Carousel } from "flowbite-react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";

function PoemMain() {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);

  return (
    <div className="bg-[#FBF2FF] border-2 border-[#583184] rounded-xl w-100vw text-center p-4">
      <div className="flex justify-around">
      <Button onClick={() => setIsModal1Open(true)} className="bg-[#583184]!">Wild Geese</Button>
      <Modal show={isModal1Open} onClose={() => setIsModal1Open(false)}>
        <ModalHeader className="bg-[#583184]! border-2 border-[#583184]! rounded-xl w-100vw text-center p-4 text-black!">Wild Geese by Mary Oliver</ModalHeader>
        <ModalBody className="bg-[#FBF2FF] border-2 border-[#583184] rounded-xl w-100vw text-center p-4 text-black!">
          <div className="flex flex-col h-full text-center">
            You do not have to be good.<br />
            You do not have to walk on your knees<br />
            for a hundred miles through the desert repenting.<br />
            You only have to let the soft animal of your body<br />
            love what it loves.<br />
            Tell me about despair, yours, and I will tell you mine.<br />
            Meanwhile the world goes on.<br />
            Meanwhile the sun and the clear pebbles of the rain<br />
            are moving across the landscapes,<br />
            over the prairies and the deep trees,<br />
            the mountains and the rivers.<br />
            Meanwhile the wild geese, high in the clean blue air,<br />
            are heading home again.<br />
            Whoever you are, no matter how lonely,<br />
            the world offers itself to your imagination,<br />
            calls to you like the wild geese, harsh and exciting -<br />
            over and over announcing your place<br />
            in the family of things.<br />
          </div>
        </ModalBody>
        <ModalFooter className="bg-[#E3D7E7]! border-2 border-[#583184]! rounded-xl ">
          <Button className="bg-[#583184]! " onClick={() => setIsModal1Open(false)}>Close</Button>
        </ModalFooter>
      </Modal>
      <Button onClick={() => setIsModal2Open(true)} className="bg-[#583184]!">Invitation</Button>
      <Modal show={isModal2Open} onClose={() => setIsModal2Open(false)}>
        <ModalHeader  className="bg-[#583184]! border-2 border-[#583184]! rounded-xl w-100vw text-center p-4 text-black!">Invitation by Mary Oliver</ModalHeader>
        <ModalBody  className="bg-[#FBF2FF] border-2 border-[#583184] rounded-xl w-100vw text-center p-4 text-black!">
            <div className="flex flex-col h-full text-center">
              <p>
                Oh do you have time<br />
                to linger<br />
                for just a little while<br />
                out of your busy<br />
                <br />
                and very important day<br />
                for the goldfinches<br />
                that have gathered<br />
                in a field of thistles<br />
              </p>
              <br />
              <p>for a musical battle,<br />
                to see who can sing<br />
                the highest note,<br />
                or the lowest,<br />
              </p>
              <br />
              <p>
                or the most expressive of mirth, <br />
                or the most tender?<br />
                Their strong, blunt beaks <br />
                drink the air <br />
              </p>
              <br />
              <p>
                as they strive<br />
                melodiously<br />
                not for your sake<br />
                and not for mine<br />
              </p>
              <br />
              <p>
                and not for the sake of winning<br />
                but for sheer delight and gratitude—<br />
                believe us, they say,<br />
                it is a serious thing<br />
              </p>
              <br />
              <p>
                just to be alive<br />
                on this fresh morning<br />
                in the broken world.<br />
                I beg of you,<br />
              </p>
              <br />
              <p>
                do not walk by<br />
                without pausing<br />
                to attend to this<br />
                rather ridiculous performance.<br />
              </p>
              <br />
              <p>
                It could mean something.<br />
                It could mean everything.<br />
                It could be what Rilke meant, when he wrote:<br />
                You must change your life.<br />
              </p>
              </div>
        </ModalBody>
        <ModalFooter  className="bg-[#E3D7E7]! border-2 border-[#583184]! rounded-xl ">
          <Button className="bg-[#583184]!" onClick={() => setIsModal2Open(false)}>Close</Button>
        </ModalFooter>
      </Modal>
      <Button onClick={() => setIsModal3Open(true)} className="bg-[#583184]!">The Summer Day</Button>
      <Modal show={isModal3Open} onClose={() => setIsModal3Open(false)}>
        <ModalHeader className="bg-[#583184]! border-2 border-[#583184]! rounded-xl w-100vw text-center p-4 text-black!">The Summer Day by Mary Oliver</ModalHeader>
        <ModalBody className="bg-[#FBF2FF] border-2 border-[#583184] rounded-xl w-100vw text-center p-4 text-black!">
          <div className="space-y-6">
            <div className="flex flex-col h-full text-center">
              <p>
                Who made the world?<br />
                Who made the swan, and the black bear?<br />
                Who made the grasshopper?<br />
                This grasshopper, I mean —<br />
                the one who has flung herself out of the grass,<br />
                the one who is eating sugar out of my hand,<br />
                who is moving her jaws back and forth instead of up and down —<br />
                who is gazing around with her enormous and complicated eyes.<br />
                Now she lifts her pale forearms and thoroughly washes her face.<br />
                Now she snaps her wings open, and floats away.<br />
                I don't know exactly what a prayer is.<br />
                I do know how to pay attention, how to fall down<br />
                into the grass, how to kneel down in the grass,<br />
                how to be idle and blessed, how to stroll through the fields,<br />
                which is what I have been doing all day.<br />
                Tell me, what else should I have done?<br />
                Doesn't everything die at last, and too soon?<br />
                Tell me, what is it you plan to do<br />
                with your one wild and precious life?<br />
              </p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="bg-[#E3D7E7]! border-2 border-[#583184]! rounded-xl ">
          <Button className="bg-[#583184]!" onClick={() => setIsModal3Open(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
    </div>
  );
}

export default PoemMain