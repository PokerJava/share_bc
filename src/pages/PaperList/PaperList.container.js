import React, { Component } from 'react'
import axios from 'axios'

import { navigate } from '@reach/router'

import './PaperList.container.scss'

const mockPaper = [
    {
        title: 'ความรู้',
        description: `ฮอสเปอร์ (2532) นับเป็นขั้นแรกของพฤติกรรมที่เกี่ยวข้องกับความสามารถในการจดจำ ซึ่งอาจจะโดยการนึกได้ มองเห็น ได้ยิน หรือ ได้ฟัง ความรู้นี้ เป็นหนึ่งในขั้นตอนของการเรียนรู้ โดยประกอบไปด้วยคำจำกัดความหรือความหมาย ข้อเท็จจริง ทฤษฎี กฎ โครงสร้าง วิธีการแก้ไขปัญหา และมาตรฐานเป็นต้น ซึ่งอาจกล่าวได้ว่า ความรู้เป็นเรื่องของการจำอะไรได้ ระลึกได้ โดยไม่จำเป็นต้องใช้ความคิดที่ซับซ้อนหรือใช้ความสามารถของสมองมากนัก ด้วยเหตุนี้ การจำได้จึงถือว่าเป็น กระบวนการที่สำคัญในทางจิตวิทยา และเป็นขั้นตอนที่นำไปสู่พฤติกรรมที่ก่อให้เกิดความเข้าใจ การนำความรู้ไปใช้ในการวิเคราะห์ การสังเคราะห์ การประเมินผล ซึ่งเป็นขั้นตอนที่ได้ใช้ความคิดและความสามารถทางสมองมากขึ้นเป็นลำดับ ส่วนความเข้าใจ (Comprehension)

        ฮอสเปอร์ ชี้ให้เห็นว่า เป็นขั้นตอนต่อมาจากความรู้ โดยเป็นขั้นตอนที่จะต้องใช้ความสามารถของสมองและทักษะในชั้นที่สูงขึ้น จนถึงระดับของการสื่อความหมาย ซึ่งอาจเป็นไปได้โดยการใช้ปากเปล่า ข้อเขียน ภาษา หรือการใช้สัญลักษณ์ โดยมักเกิดขึ้นหลังจากที่บุคคลได้รับข่าวสารต่าง ๆ แล้ว อาจจะโดยการฟัง การเห็น การได้ยิน หรือเขียน แล้วแสดงออกมาในรูปของการใช้ทักษะหรือการแปลความหมายต่าง ๆ เช่น การบรรยายข่าวสารที่ได้ยินมาโดยคำพูดของตนเอง หรือการแปลความหมายจากภาษาหนึ่งไปเป็นอีกภาษาหนึ่ง โดยคงความหมายเดิมเอาไว้ หรืออาจเป็นการแสดงความคิดเห็นหรือให้ข้อสรุปหรือการคาดคะเนก็ได้
        
        ความรู้เกิดจากพฤติกรรม
        
        ประภาเพ็ญ สุวรรณ (2542) ได้ให้คำอธิบายว่า ความรู้ เป็นพฤติกรรมขั้นต้นที่ผู้เรียนรู้เพียงแต่เกิดความจำได้ โดยอาจจะเป็นการนึกได้หรือโดยการมองเห็น ได้ยิน จำได้ ความรู้ในชั้นนี้ได้แก่ ความรู้เกี่ยวกับคำจำกัดความ ความหมาย ข้อเท็จจริง กฎเกณฑ์ โครงสร้างและวิธีแก้ไขปัญหา ส่วนความเข้าใจอาจแสดงออกมาในรูปของทักษะด้าน “การแปล” ซึ่งหมายถึง ความสามารถในการเขียนบรรยายเกี่ยวกับข่าวสารนั้น ๆ โดยใช้คำพูดของตนเอง และ “การให้ความหมาย” ที่แสดงออกมาในรูปของความคิดเห็นและข้อสรุป รวมถึงความสามารถในการ “คาดคะเน” หรือการคาดหมายว่าจะเกิดอะไรขึ้น
        
        ความรู้มีขั้นตอนดังนี้
        
        เบนจามิน บลูม (2542) ได้ให้ความหมายของ ความรู้ ว่าหมายถึง เรื่องที่เกี่ยวกับการระลึกถึงสิ่งเฉพาะ วิธีการและกระบวนการต่าง ๆ รวมถึงแบบกระสวนของโครงการวัตถุประสงค์ในด้านความรู้ โดยเน้นในเรื่องของกระบวนการทางจิตวิทยาของความจำ อันเป็นกระบวนการที่เชื่อมโยงเกี่ยวกับการจัดระเบียบ โดยก่อนหน้านั้นในปี ค.ศ. 1965 บลูมและคณะ ได้เสนอแนวคิดเกี่ยวกับการรับรู้หรือพุทธิพิสัย (cognitive domain) ของคน ว่าประกอบด้วยความรู้ตามระดับต่าง ๆ รวม 6 ระดับ ซึ่งอาจพิจารณาจากระดับความรู้ในขั้นต่ำไปสู่ระดับของความรู้ในระดับที่สูงขึ้นไป โดยบลูมและคณะ ได้แจกแจงรายละเอียดของแต่ละระดับไว้ดังนี้
        
        1. ความรู้ (Knowledge) หมายถึง การเรียนรู้ที่เน้นถึงการจำและการระลึกได้ถึงความคิด วัตถุ และปรากฏการณ์ต่าง ๆ ซึ่งเป็นความจำที่เริ่มจากสิ่งง่าย ๆ ที่เป็นอิสระแก่กัน ไปจนถึงความจำในสิ่งที่ยุ่งยากซับซ้อนและมีความสัมพันธ์ระหว่างกัน
        
        2. ความเข้าใจหรือความคิดรวบยอด (Comprehension) เป็นความสามารถทางสติปัญญาในการขยายความรู้ ความจำ ให้กว้างออกไปจากเดิมอย่างสมเหตุสมผล การแสดงพฤติกรรมเมื่อเผชิญกับสื่อความหมาย และความสามารถในการแปลความหมาย การสรุปหรือการขยายความสิ่งใดสิ่งหนึ่ง
        
        3. การนำไปปรับใช้ (Application) เป็นความสามารถในการนำความรู้ (knowledge) ความเข้าใจหรือความคิดรวบยอด (comprehension) ในเรื่องใด ๆ ที่มีอยู่เดิม ไปแก้ไขปัญหาที่แปลกใหม่ของเรื่องนั้น โดยการใช้ความรู้ต่าง ๆ โดยเฉพาะอย่างยิ่งวิธีการกับความคิดรวบยอดมาผสมผสานกับความสามารถในการแปลความหมาย การสรุปหรือการขยายความสิ่งนั้น
        
        4. การวิเคราะห์ (Analysis) เป็นความสามารถและทักษะที่สูงกว่าความเข้าใจ และการนำไปปรับใช้ โดยมีลักษณะเป็นการแยกแยะสิ่งที่จะพิจารณาออกเป็นส่วนย่อย ที่มีความสัมพันธ์กัน รวมทั้งการสืบค้นความสัมพันธ์ของส่วนต่าง ๆ เพื่อดูว่าส่วนประกอบปลีกย่อยนั้นสามารถเข้ากันได้หรือไม่ อันจะช่วยให้เกิดความเข้าใจต่อสิ่งหนึ่งสิ่งใดอย่างแท้จริง
        
        5. การสังเคราะห์ (Synthesis) เป็นความสามารถในการรวบรวมส่วนประกอบย่อย ๆ หรือส่วนใหญ่ ๆ เข้าด้วยกันเพื่อให้เป็นเรื่องราวอันหนึ่งอันเดียวกัน การสังเคราะห์จะมีลักษณะของการเป็นกระบวนการรวบรวมเนื้อหาสาระของเรื่องต่าง ๆ เข้าไว้ด้วยกัน เพื่อสร้างรูปแบบหรือโครงสร้างที่ยังไม่ชัดเจนขึ้นมาก่อน อันเป็นกระบวนการที่ต้องอาศัยความคิดสร้างสรรค์ภายในขอบเขตของสิ่งที่กำหนดให้
        
        6. การประเมินผล (Evaluation) เป็นความสามารถในการตัดสินเกี่ยวกับความคิด ค่านิยม ผลงาน คำตอบ วิธีการและเนื้อหาสาระเพื่อวัตถุประสงค์บางอย่าง โดยมีการกำหนดเกณฑ์ (criteria) เป็นฐานในการพิจารณาตัดสิน การประเมินผล จัดได้ว่าเป็นขั้นตอนที่สูงสุดของพุทธิลักษณะ (characteristics of cognitive domain) ที่ต้องใช้ความรู้ความเข้าใจ การนำไปปรับใช้ การวิเคราะห์และการสังเคราะห์เข้ามาพิจารณาประกอบกันเพื่อทำการประเมินผลสิ่งหนึ่งสิ่งใด
        
        
        
        ความรู้คือ สิ่งที่มนุษย์สร้าง ผลิต ความคิด ความเชื่อ ความจริง ความหมาย โดยใช้ ข้อเท็จจริง ข้อคิดเห็น ตรรกะ แสดงผ่านภาษา เครื่องหมาย และสื่อต่าง ๆ โดยมีเป้าหมายและวัตถุประสงค์เป็นไปตาม
        
        แนวคิดเกี่ยวกับความรู้
        
        ญาณวิทยา (epistemology) หมายถึง ศาสตร์หรือทฤษฎีเกี่ยวกับความรู้แท้ หรือความรู้ที่มีระบบ ในทางปรัชญา ความรู้ต้องเป็นความรู้ในความจริง เพราะฉะนั้นปัญหาญาณวิทยา จึงไม่ใช่เพียงว่า ความรู้คืออะไร แต่ยังเกี่ยวพันกับความจริงด้วย เช่น อะไรคือสิ่งที่เรารู้ มนุษย์รู้ความจริงได้หรือไม่ โดยวิธีใด ความจริงเป็นสิ่งสัมพัทธ์ (Relative) หรือเป็นสิ่งสัมบูรณ์ (Absolute) เป็นต้น
        
        โปรตากอรัส (2553)
        
        มนุษย์คือมาตรการสำหรับทุกสิ่ง (Man is the measure of all things.) : ความรู้และความจริงเป็นอัตวิสัย
        
        โปรตากอรัสเห็นว่าสิ่งที่เรียกว่า “ความรู้” นั้นเป็นเพียงความเห็นหรือทัศนะของแต่ละคน (subjective opinion) ความรู้ขึ้นอยู่กับผู้รู้แต่ละคน สิ่งที่ดูเหมือนเป็นความจริงสำหรับคนหนึ่ง ๆ ก็จะเป็นจริงสำหรับคน ๆ นั้น ไม่มีความจริงปรนัย (objective truth) ที่ใช้และยอมรับได้สำหรับทุกคน ดังนั้น สำหรับโปรตากอรัส ความรู้ที่เป็นสากล แน่นอนตายตัวสำหรับทุกคนจึงไม่มีอยู่ แม้กระทั่ง “ความฝันก็อาจเป็นจริงได้สำหรับผู้ฝัน” กล่าวได้ว่า ความจริงในทัศนะของโปรตากอรัสเป็นสิ่งสัมพัทธ์ คือ เปลี่ยนแปลงได้ ไม่ตายตัว ไม่จริงแท้แน่นอน
        
        แนวคิดของโปรตากอรัส ยังเสนออีกว่า มนุษย์ไม่มีความจำเป็นที่จะต้องไปแสวงหาความรู้ที่เป็นสากลเพื่อเป็นมาตรฐานเดียวกัน เขาไม่เชื่อว่ามนุษย์จะสามารถมีความรู้ในสิ่งเป็นจริงสูงสุด (Absolute Reality) ในฐานะนักคิดในลัทธิประสบการณ์นิยม (empiricism) โปรตากอรัส เน้นประสบการณ์ทางประสาทสัมผัส และเชื่อว่าประสาทสัมผัสเป็นสิ่งจริง (seeing is believing) การศึกษาไม่ใช่วิธีการเพื่อค้นหาว่าสิ่งใดจริงหรือเท็จ ครูอาจารย์ก็ไม่ใช่ผู้ที่จะบอกหรือแสดงความจริง เป็นเพียงผู้ชักชวนให้ผู้เรียน “ยอมรับ” คำพูดหรือความเชื่อของครูอาจารย์เท่านั้น ส่วนการตัดสินใจยอมรับเป็นเรื่องของแต่ละบุคคล
        
        โสคราตีส (2553)
        
        โสคราตีส เชื่อว่าความรู้เป็นสิ่งสัมบูรณ์ คือ เป็นสากล เที่ยงแท้แน่นอน เป็นความรู้ในความจริง และมีความรู้ชนิดเดียวคือ ความรู้ชนิดที่ทำให้ผู้รู้รักความจริง เทิดทูนคุณธรรม สามารถคิดและทำได้อย่างถูกต้อง
        
        โสคราตีสเชื่อว่า ผู้มีความรู้จะไม่เป็นคนเลวโดยเด็ดขาด ส่วนผู้ที่ยังทำผิด ก็เพราะเขาไม่มีความรู้ มีแต่เพียงความเห็น จึงอาจผิดพลาดได้เป็นธรรมดา ผู้มีความรู้ทุกคนสามารถเข้าถึงความจริงได้ตรงกัน เพราะความรู้หรือความจริงเป็นสิ่งที่มีอยู่ในตัวมนุษย์อยู่แล้ว เรียกว่าเป็นความรู้ก่อนประสบการณ์ (Apriori Knowledge) ดังนั้นสิ่งที่ถูกรู้คือ ตัวเรา มิใช่โลกภายนอก คนเราต้องศึกษาตนเอง (Know Thyself) ให้เข้าใจแล้วจะพบความจริง
        
        วิธีการที่โสคราตีสใช้ในการศึกษาตนเองก็คือ การคิดตรึกตรองในขณะจิตสงบ และอีกวิธีหนึ่งคือ การถาม-ตอบ หรือที่เรียกว่า วิธีการของโสคราตีส (Socratic Method) ประกอบด้วย
        
        1. สงสัยลังเล (skeptical) โสคราตีสจะเริ่มต้นด้วยการยกย่องคนอื่น พร้อมกับขอร้องให้ช่วยอธิบายเรื่องที่ยังไม่กระจ่างให้ฟัง เช่น ความรัก ความงาม คุณธรรม ความยุติธรรม ความรู้ เป็นต้น
        
        2. สนทนา (conversation) โสคราตีสจะเป็นผู้ตั้งคำถามให้คู่สนทนาเป็นผู้ตอบ เขาเชื่อว่าวิธีการนี้จะทำให้คู่สนทนาเปิดเผยความจริงที่มีอยู่ในตัวเองออกมา โดยมีเขาเป็นเพียงผู้ช่วย ไม่ใช่ผู้นำความรู้ไปให้ เพราะความรู้ไม่ใช่สิ่งใหม่ ขอเพียงนำออกมาให้ถูกวิธี
        
        3. หาคำจำกัดความ (conceptional หรือ definitional ) โสคราตีส เชื่อว่าความจริงมาตรฐานจะแฝงอยู่ในคำจำกัดความ หรือคำนิยาม ที่สมบูรณ์ เช่น ความยุติธรรม หากเรายังไม่รู้ว่า ความยุติธรรมคืออะไร เราก็ยังไม่เข้าใจและไม่รู้จักว่าการกระทำใดยุติธรรมหรือไม่ยุติธรรม เป็นต้น ดังนั้นการสนทนาจึงเป็นการเสนอคำนิยามศัพท์ และพยายามขัดเกลาคำนิยามนั้นให้บกพร่องน้อยที่สุด
        
        4. ทดสอบด้วยการลงมือปฏิบัติ โดยใช้วิธีการยกตัวอย่างที่มีสภาพแวดล้อมต่างกันมาช่วยโต้แย้งเพื่อขัดเกลาคำนิยาม คำนิยามใดที่ยังโต้แย้งได้ก็แสดงว่ายังไม่สมบูรณ์ จะต้องหาคำจำกัดความที่ทุกคนยอมรับโดยไม่มีข้อแย้ง
        
        5. สรุปกฎเกณฑ์ไว้เป็นมาตรฐาน เพื่อนำไปใช้อ้างอิงต่อไป รวมถึงการพิสูจน์คำนิยามดังกล่าวด้วย
        
        พลาโต (2553)
        
        พลาโต (Plato) : การเรียน คือ การทบทวนความรู้เดิมในทัศนะของพลาโต ความรู้ไม่ใช่สิ่งแปลกใหม่ หากเป็นสิ่งที่มีมาก่อนแล้ว (Apriori) ดังนั้น ผู้มีความรู้คือ ผู้ที่จิตของเขาได้สัมผัสกับ “แบบ” ซึ่งเป็นความจริงสูงสุด ส่วนการรับรู้อื่น ๆ เป็นเพียงความเชื่อ หรือความเห็น มิใช่ความรู้
        
        พลาโตเสนอว่า จิตหรือวิญญาณดั้งเดิมของมนุษย์ ซึ่งเป็นอมตะนั้น คุ้นเคยกับ “แบบ” ดีอยู่แล้ว แต่เมื่อจิตมาคลุกคลีกับโลกแห่งวัตถุทำให้หลงลืมไป กระบวนการศึกษาเป็นหนทางที่จะทำให้จิตฟื้นความทรงจำได้ การเรียนจึงเป็นการทบทวนสิ่งที่เคยรู้มาแล้ว ครูเป็นเพียงผู้ “ถาม” เพื่อกระตุ้นให้ผู้เรียนคิดค้นหาคำตอบด้วยตัวเอง ครูไม่ได้ป้อนหรือให้ความรู้ใหม่แก่ผู้เรียน
        
        พลาโตไม่เห็นด้วยกับนักปรัชญาโซฟิสต์ (อย่าง โปรตากอรัส) ที่เชื่อว่าความรู้คือประสาทสัมผัสและความเห็นส่วนบุคคล เพราะพลาโตเชื่อว่า ประสาทสัมผัสอาจลวงเราได้ และยังเป็นเพียงเงาหรือมายาภาพของแบบเท่านั้น`,
        editor: 'Admin'
    },
    {
        title: 'Bitcoin คืออะไรและมีการทำงานอย่างไร?',
        description: `แน่นอนว่าคุณจะต้องเคยได้ยินเกี่ยวกับเรื่องนี้ เงินดิจิตอลตัวแรกและมีชื่อเสียงมากที่สุดได้ปรากฎอยู่บนพาดหัวข่าวเนื่องจากการเพิ่มขึ้นของมูลค่าทะลุผ่าน $1,000 เป็นครั้งแรก เมื่อวันที่ 1 มกราคม 2017 และขึ้นไปถึง $19,000 ในเดือนธันวาคมของปีนั้น แล้วจึงตกลงมาเกือบ 50 เปอร์เซ็นต์ในช่วงต้นปี 2018

        แต่ประวัติของ Bitcoin นั้นมีมากกว่านี้ และไม่ได้มีเพียงแค่ในข่าวที่พูดเกี่ยวกับความผันผวนของราคาที่เกิดขึ้น มันได้รวมเอาเทคโนโลยี เงินตรา คณิตศาสตร์ เศรษฐศาสตร์ และความเคลื่อนไหวทางสังคมมาไว้ในที่เดียวกัน มันมีหลายแง่มุม เกี่ยวกับทางด้านเทคนิคค่อนข้างมาก และพัฒนาต่อไปได้อย่างรวดเร็ว แต่เนื่องจากมันเป็นดิจิตอลทั้งหมดและไม่จำเป็นต้องสัมพันธ์กับเงินตรา ผู้ใช้งานใหม่จึงอาจทำความเข้าใจได้ยาก คู่มือนี้มีวัตถุประสงค์เพื่ออธิบายถึงแนวความคิดพื้นฐาน และตอบคำถามพื้นฐานบางอย่างเกี่ยวกับ bitcoin
        
        สรุปความเป็นมาโดยย่อ
        บิตคอยน์ได้รับการคิดค้นขึ้นเมื่อปี 2009 โดยบุคคล (หรือกลุ่ม) ที่เรียกตัวเองว่า ซาโตชิ นากะโมโต้ (Satoshi Nakamoto) เขาได้ประกาศถึงวัตถุประสงค์คือการสร้าง "ระบบการชำระเงินทางอิเล็กทรอนิกส์แบบใหม่" ที่ "เป็นแบบกระจายจากศูนย์กลางโดยที่ไม่ต้องมีเซิฟเวอร์หรือผู้ควบคุมจากส่วนกลาง" ภายหลังจากที่ได้พัฒนาแนวคิดและเทคโนโลยี ในปี 2011 Nakamoto ได้ส่งซอร์สโค้ดและโดเมนให้กับสมาชิกคนอื่นๆ ของสังคม bitcoin และได้หายตัวไป
        
        Bitcoin คืออะไร
        Bitcoin คือสกุลเงินดิจิตอล มันเป็นแนวคิดที่อาจจะซับซ้อนกว่าที่คุณคิด: มันไม่ใช่เพียงแค่เงินที่มีการกำหนดค่าไว้ในบัญชีดิจิตอล เหมือนกับบัญชีธนาคารหรือวงเงินเครดิตของคุณ Bitcoin ไม่เหมือนเหรียญหรือธนบัตรที่สามารถจับต้องได้
        
        Bitcoin แตกต่างจากเงินแบบดั้งเดิมอย่างไร?
        Bitcoin สามารถนำมาใช้ในการจ่ายเงินทางอิเล็กทรอนิกส์ ถ้าหากทั้งสองฝ่ายยินยอม ในลักษณะนี้มันก็เหมือนกับเงินดอลลาร์ ยูโร หรือเยน ที่สามารถถูกซื้อขายได้ในรูปแบบดิจิตอล
        
        แต่มันแตกต่างจากเงินตราที่เป็นดิจิตอลหลายอย่าง:
        
        1. การกระจายจากศูนย์กลาง
        
        ฟีเจอร์ที่สำคัญที่สุดของ Bitcoin คือระบบกระจายจากศูนย์กลาง ไม่มีสถาบันใดที่คอยควบคุมเครือข่าย bitcoin มันได้รับการบำรุงรักษาโดยกลุ่มของนักเขียนโค้ดอาสาสมัครและอยู่ภายใต้การจัดการโดยเครือข่ายแบบเปิดของเครื่องคอมพิวเตอร์ชนิดพิเศษที่กระจายอยู่ทั่วโลก สิ่งนี้ดึงดูดบุคคลและกลุ่มที่รู้สึกไม่สบายใจกับการควบคุมของธนาคารหรือสถาบันของรัฐที่มีต่อเงินของพวกเขา
        
        Bitcoin แก้ปัญหา "การจ่ายเงินซ้ำซ้อน" ของเงินอิเล็กทรอนิกส์ (ซึ่งสินทรัพย์ดิจิตอลสามารถถูกคัดลอกและนำมาใช้ซ้ำได้อย่างง่ายดาย) ผ่านการเข้ารหัสและสิ่งจูงใจทางเศรษฐกิจ ในเงินอิเล็กทรอนิกส์ทั่วไป ฟังก์ชั่นนี้จะถูกดำเนินการโดยธนาคาร ซึ่งให้พวกเขาสามารถควบคุมระบบแบบดังเดิมได้ ด้วย Bitcoin ความสมบูรณ์ของการทำธุรกรรมจะได้รับการบำรุงรักษาโดยเครือข่ายแบบเปิดที่ไม่ได้มีผู้ใดเป็นเจ้าของ
        
        2. มีจำนวนจำกัด
        
        เงินตราทั่วไป เช่น ดอลลาร์ ยูโร เยน ต่างมีจำนวนที่ไม่จำกัด: ธนาคารกลางสามารถสร้างขึ้นมาได้ตามที่ต้องการและพยายามที่จะควบคุมค่าของสกุลเงินหนึ่งเมื่อเทียบกับสกุลเงินอื่น ผู้ที่เป็นเจ้าของเงินตรา (และโดยเฉพาะประชากรที่ไม่ค่อยมีทางเลือก) เป็นผู้จ่ายค่าใช้จ่าย
        
        ด้วย Bitcoin ปริมาณได้ถูกควบคุมโดยอัลกอริทึ่มที่อ้างอิง จำนวนเหรียญของ bitcoins เพียงเล็กน้อยได้ถูกสร้างขึ้นทุกชั่วโมง และจะเป็นเช่นนี้ต่อไปในอัตราที่ลดลงจนถึง 21 ล้านเหรียญ สิ่งนี้ทำให้ Bitcoin ดูน่าสนใจในฐานะสินทรัพย์: ในทางทฤษฎีถ้าหากอุปสงค์เพิ่มขึ้นและอุปทานยังมีอยู่เท่าเดิม มูลค่าจะเพิ่มขึ้น
        
        3. การไม่ระบุตัวตน
        
        ถึงแม้ว่าผู้ที่ทำการชำระเงินทางอิเล็กทรอนิกส์แบบเดิมจะต้องมีการระบุตัวตน (เพื่อวัตถุประสงค์ในการตรวจสอบและเป็นไปตามกฎหมายป้องกันการฟอกเงิน) ผู้ใช้งาน Bitcoin จะไม่ต้องเปิดเผยตัวตนทั้งหมด เนื่องจากไม่มี "ผู้ตรวจสอบ" จากส่วนกลาง ผู้ใช้งานไม่จำเป็นต้องแสดงตัวตนเมื่อส่ง bitcoin ให้กับผู้อื่น เมื่อคำขอในการทำธุรกรรมได้ถูกส่ง โปรโตคอลจะตรวจสอบการทำธุรกรรมก่อนหน้านี้เพื่อยืนยันว่าผู้ส่งมีจำนวนเหรียญ Bitcoins ที่เพียงพอและมีอำนาจในการส่งมัน ระบบไม่จำเป็นต้องทราบตัวตนของคุณ
        
        ในทางปฏิบัติ ผู้ใช้งานแต่ละคนจะถูกระบุตัวตนโดยที่อยู่ของ "wallet" (หรือกระเป๋าเงินอิเล็กทรอนิกส์) การทำธุรกรรมสามารถถูกสะกดรอยได้จากวิธีนี้ นอกจากนี้ตำรวจยังได้พัฒนาวิธีการที่ใช้ในการระบุตัวตนของผู้ใช้เมื่อมีความจำเป็น
        
        กฎหมายได้กำหนดไว้ว่า ตลาดเกือบทุกแห่งจะต้องตรวจสอบตัวตนของลูกค้าก่อนที่ลูกค้าจะสามารถทำการซื้อหรือขาย Bitcoins ได้ ซึ่งเป็นการช่วยเหลือการติดตามการใช้งานของลูกค้า เนื่องจากระบบมีความโปร่งใส กระบวนการในการทำธุรกรรมนั้นได้เปิดให้ทุกคนสามารถดูได้
        
        สิ่งนี้ทำให้ bitcoin ไม่ได้เป็นสกุลเงินในอุดมคติสำหรับอาชญากร ผู้ก่อการร้าย หรือผู้ที่ทำการฟอกเงิน
        
        4. มีความแน่นอน
        
        การทำธุรกรรมของ Bitcoin ไม่สามารถย้อนกลับได้เหมือนกับการทำธุรกรรมด้วยเงินตราแบบปกติ
        
        นั่นเป็นเพราะไม่มี "ผู้กำกับดูแล" จากส่วนกลางที่สามารถบอกได้ว่า "ตกลง จะต้องมีการคืนเงิน" ถ้าหากการทำธุรกรรมได้ถูกลงทะเบียนในเครือข่าย และถ้าหากระยะเวลาได้ผ่านไปเกินกว่าหนึ่งชั่วโมงแล้ว มันเป็นไปไม่ได้ที่จะทำการแก้ไข
        
        ประเด็นนี้อาจทำให้ใครหลายคนไม่สบายใจ นั่นหมายความว่าคุณจะไม่สามารถปรับการทำธุรกรรมในเครือข่าย Bitcoin ได้
        
        5 ความหลากหลาย
        
        หน่วยที่เล็กที่สุดของ Bitcoin เรียกว่า satoshi มันเท่ากับหนึ่งในหนึ่งร้อยล้านส่วนของ bitcoin (0.00000001) ที่ราคาปัจจุบัน มันเท่ากับหนึ่งในร้อยส่วนของหนึ่งเซ็นต์ สิ่งนี้จะช่วยอำนวยความสะดวกในการทำธุรกรรมขนาดเล็กที่เงินอิเล็กทรอนิกส์แบบปกติไม่สามารถทำได้
        
        เราจะสามารถเฝ้าดูการทำธุรกรรมของ Bitcoin ได้อย่างไร?
        Bitcoins ใช้บันทึกข้อมูลที่เรียบง่ายเรียกว่าบล็อคเชน บล็อคเชนแต่ละบล็อกจะไม่เหมือนกันสำหรับผู้ใช้งานแต่ละคนและ Bitcoin wallet ส่วนตัวของแต่ละคน การทำธุรกรรม Bitcoin ทั้งหมดจะถูกบันทึกและสามารถดูได้จากสมุดบัญชีสาธารณะ ซึ่งช่วยรับรองความถูกต้องและป้องกันการฉ้อโกง ขั้นตอนนี้จะป้องกันไม่ให้เกิดการทำธุรกรรมที่ซ้ำซ้อนกันและการคัดลอก bitcoin
        
        หมายเหตุ: ถึงแม้ว่า bitcoin แต่ละตัวจะบันทึกที่อยู่ดิจิตอลของกระเป๋าเงินแต่ละใบที่มันได้ไปถึง แต่ระบบของ bitcoin เองไม่ได้บันทึกชื่อของผู้ที่เป็นเจ้าของกระเป๋าเงินนี้ ในทางปฏิบัติ นั่นหมายความว่าการทำธุรกรรมแต่ละครั้งจะได้รับการยืนยันทางดิจิตอล แต่ก็ไม่ได้มีการเปิดเผยชื่อใดๆ
        
        ถึงแม้ว่าผู้ใช้งานจะไม่สามารถดูข้อมูลระบุตัวตนของตัวเองได้ง่ายนัก แต่พวกเขาสามารถดูประวัติย้อนหลังของ Bitcoin wallet ของตัวเองได้ สิ่งนี้ถือเป็นเรื่องดีเนื่องจากประวัติย้อนหลังจะช่วยเพิ่มความโปร่งใสและความปลอดภัย และยังป้องกันไม่ได้มีการใช้ Bitcoins เพื่อวัตถุประสงค์ที่ผิดกฎหมาย
        
        Bitcoin มีการทำงานอย่างไร
        เปรียบเทียบสิ่งนี้กับ Torrent ซึ่งเป็นเครือข่าย P2P ที่คุณอาจเคยใช้ในการดาวน์โหลดเพลงมากมายในช่วงต้นปี 2000s เว้นแต่ในเรื่องการเคลื่อนย้ายไฟล์จากที่หนึ่งไปยังอีกที่หนึ่ง เครือข่าย Bitcoin สร้างและตรวจสอบบล็อคของข้อมูลที่ถูกแสดงในรูปของเงินเสมือน
        
        บิตคอยน์และอนุพันธ์อีกมากมายรู้จักกันในชื่อเงินดิจิทัล ระบบใช้การเข้ารหัส (การเข้ารหัสขั้นสูงที่เรียกว่าบล็อคเชน) ในการสร้างสกุลเงินตัวใหม่และตรวจสอบเงินที่ถูกถ่ายโอนจากที่หนึ่งไปยังอีกที่หนึ่ง ลำดับขั้นตอนการเข้ารหัสมีวัตถุประสงค์หลายอย่าง: เพื่อป้องกันการฉ้อโกงในการทำธุรกรรม เพื่อทำให้ธนาคารหรือกระเป๋าเงินสามารถถ่ายโอนได้ในรูปของข้อมูล และเพื่อตรวจสอบยืนยันการมูลค่าการโอน Bitcoin จากที่หนึ่งไปอีกที่หนึ่ง
        
        ก่อนที่จะสามารถใช้จ่าย Bitcoin ได้นั้น เหรียญ Bitcoin จะต้องถูกสร้างโดยระบบหรือถูกขุดจากเหมือง ในขณะที่สกุลเงินทั่วไปจะต้องถูกผลิตหรือพิมพ์โดยรัฐบาล การขุดเหมืองของ Bitcoin ได้ถูกออกแบบมาเพื่อให้ระบบสามารถพึ่งพาตัวเองได้: ผู้คนขุด Bitcoins โดยการให้พลังประมวลผลจากคอมพิวเตอร์ของตนกับเครือข่ายแบบกระจาย ซึ่งสร้างบล็อกของข้อมูลใหม่ที่ประกอบไปด้วยบันทึกข้อมูลของการทำธุรกรรมทั้งหมด การเข้ารหัสและถอดรหัสบล็อคเหล่านี้ต้องการพลังในการประมวลผลมหาศาล และผู้ใช้งานที่สามารถสร้างบล็อคใหม่ได้สำเร็จ (ผู้ใช้ที่เป็นเจ้าของระบบที่สร้างตัวเลขแบบสุ่มที่ระบบยอมรับให้เป็นบล็อคใหม่) จะได้รับ Bitcoins หรือสัดส่วนในค่าธรรมเนียมของการทำธุรกรรมเป็นสิ่งตอบแทน
        
        ด้วยวิธีการนี้ ขั้นตอนการเคลื่อนย้าย Bitcoins จากี่หนึ่งไปยังอีกที่หนึ่งได้สร้างความต้องการพลังในการประมวลผลให้กับเครือข่าย ซึ่งสร้างเหรียญ Bitcoins ขึ้นมาใหม่ที่จะสามารถนำมาใช้จ่ายได้ นี่คือระบบของการทำซ้ำตัวเองที่สร้างความมั่งคั่ง ... หรืออย่างน้อยสร้างมูลค่าที่เกี่ยวข้องกับความมั่งคั่ง`,
        editor: 'Admin'
    },
    {
        title: 'Ethereum คืออะไร และมีความสำคัญในโลก Blockchain อย่างไร',
        description: `สกุลเงินดิจิทัล เป็นสกุลเงินที่ได้รับความนิยมอย่างมากในปัจจุบัน เพราะสามารถใช้ในการทำธุรกรรมหลากหลายอย่างได้ และมีสกุลเงินใหม่ๆเกิดขึ้นอยู่ตลอดเวลา ทำให้นักเทรด สามารถเลือกเทรดสกุลเงินต่างๆได้ตามความต้องการ โดยดูแนวโน้มการขึ้นลงต่างๆ และศึกษาวิเคราะห์กราฟและข้อมูลอย่างถูกต้อง และวันนี้เราจะมาพูดถึงสกุลเงิน Ethereum (อีเธอร์เลียม) ว่ามีความเป็นมาอย่างไร ทำไมชาวคริปโตจึงนิยมกัน

        สกุลเงิน Ethereum เป็นหนึ่งในสกุลเงินดิจิทัล ได้รับการพัฒนาจากเด็กหนุ่มชาวรัสเซีย นามว่า Vitalik Buterin เขาเองเคยอยู่ในทีมพัฒนาเหรียญบิทคอยน์มาก่อน และการที่เขาต้องการที่จะสร้างเหรียญสกุลนี้ขึ้นมา ก็เพื่อต้องการให้ใช้งานได้เหมือนกับเหรียญบิทคอยน์ แต่เพิ่มความสามารถของเหรียญให้มากยิ่งขึ้น เพื่อจะได้ตอบสนองต่อความต้องการของผู้ใช้งาน สกุลเงินนี้จึงไม่ได้จำกัดแค่เพียงการใช้งานด้านการงาน แต่ยังสามารถใช้ในการดำเนินธุรกิจต่างๆได้ด้วย อันที่จริงแล้ว Ethereum และบิทคอยน์ไม่ได้ต่างกันเลย เพราะว่าเป็นเงินสกุลดิจิตอลเหมือนกัน และขุด ซื้อขายเก็งกำไรได้เหมือนกัน และในบางประเทศโดยเฉพาะประเทศญี่ปุ่นและประเทศสวิสเซอร์แลนด์ก็ให้การยอมรับในการซื้อสินค้าและบริการได้ แต่บิทคอยน์ก็มีข้อแตกต่างอยู่บ้างตรงที่มั เป็นแค่สกุลเงินจะพัฒนาหรือทำอะไรมากไม่ได้ แต่สำหรับสกุลเงิน Ethereum นั้น เปิดให้ทุกคนเข้ามาเขียนข้อมูลบนสกุลเงินเพื่อร่วมกันพัฒนาได้เพราะมันเป็นระบบ Open Source ถือเป็นข้อดีเพราะมันทำให้ทุกคนเข้าถึงสกุลเงินนี้ได้ และยังสามารถพัฒนาให้ตอบโจทย์คนที่ใช้บริการได้ดีอีกด้วย โดยคุณอาจเคยได้ยินคำว่า ERC20 มาหลายครั้งแล้วในโลกคริปโต ซึ่ง ERC20 กล่าวง่ายๆก็คือระบบ Smart Contractบนแพลตฟอร์ม Ethereum เพื่อใช้ในการสร้าง Token นั่นเอง อ่านเพิ่มเติมเกี่ยวกับ ERC20 ที่นี่
        
        และดูเหมือนว่าความนิยมของ Ethereum จะมีมากขึ้นเรื่อยๆ พร้อมๆกับการเติบโตของสกุลเงินอื่นๆ ที่คุณสามารถเลือกได้เองว่าต้องการลงทุนแบบไหนอย่างไร และจะทำอย่างไรบ้างกับสกุลเงินนี้ อย่างเช่น การชำระค่าใช้จ่าย ธุรกิจการเช่ารถหรือรถรับจ้างที่มีการใช้ระบบ Smart Contract ที่เป็นความสามารถเฉพาะตัวของEthereumโดยที่จะคล้ายคลึงกับ Uber และ Grab Bike หรือ Grab Taxi แต่จะแตกต่างกันตรงที่ว่าการชำระค่าบริการผ่านแพลตฟอร์ม Ethereumนั้นไม่จำเป็นต้องผ่านคนกลาง ดังนั้นจึงทำให้นักลงทุนหลายคนสนใจในสกุลเงิน Ethereum นี้กันมาก แต่อย่างไรก็ตาม คุณต้องทำความเข้าใจว่าการลงทุนทุกอย่างมีความเสี่ยงจึงต้องระมัดระวังในเรื่องของการลงทุนให้มากเพราะถึงแม้สิ่งเหล่านี้จะถูกคิดค้นขึ้นมา แต่ในความเป็นจริงแล้วมันยังเพิ่งถูกเริ่มทดสอบใช้และยังไม่ได้ถูกเอามาใช้ในชีวิตจริง
        
        เพราะฉะนั้นหากใครสนใจลงทุนเงินสกุล Ethereum คุณต้องศึกษาแนวโน้มของตลาดให้ดีก่อนว่า เป็นอย่างไรบ้าง เพื่อวิเคราะห์ข้อมูลก่อนการลงทุนให้ดี ก่อนที่จะตัดสินใจลงทุน เพื่อให้ได้กำไรมากที่สุดถ้าขาดทุนก็ยอมรับได้ และอย่าเชื่อเซียนมากเกินไป ควรวิเคราะห์ด้วยตัวคุณเองให้มากที่สุด เพราะการใช้ประสบการณ์ของคุณจะช่วยให้คุณนั้นลงทุนได้ในช่วงเวลาที่ถูกต้อง เป็นไปอย่างมีประสิทธิภาพตามที่คุณต้องการด้วย`,
        editor: 'woranittawan'
    }
]

class PaperListContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            paperList: []
        }
    }

    componentDidMount() {

    }

    fetchAllPaper() {
        return axios.get('')
    }

    renderPaperList = () => {
        return mockPaper.map((paper, index) => <div className="paper" key={index} onClick={() => this.handleClickViewPaper(paper)}>
            <div className="title">{paper.title}</div>
            <div className="short-description">{paper.description}</div>
            <div className="editor">{paper.editor}</div>
        </div>)
    }

    handleClickViewPaper = (paper) => {
        navigate('/view-paper', { state: paper })
    }

    handleClickCreatePage = () => {
        navigate('/create-paper')
    }

    render() {
        const RenderPaperList = this.renderPaperList
        return (
            <div className="paper-list-container">
                <div className="paper-card">
                    <div className="title">
                        <h1>Paper</h1>
                        <div className="btn" onClick={() => this.handleClickCreatePage()}>Create Paper</div>
                    </div>
                    <RenderPaperList />
                </div>
            </div>
        )
    }
}

export default PaperListContainer