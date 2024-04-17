import {Button} from '@/components/ui/button'

export default function Content({title, description}) {
  return (
    <div>
      <div>
        <h2>Thang máy Nhật Bản SANYO YUSOKI</h2>
        <p>
          Chúng tôi tin rằng với một nền móng vững chắc sẽ cho ra đời những sản
          phẩm thang máy chất lượng nhất. SANYO YUSOKI vẫn liên tục đầu tư cho
          Nghiên cứu Phát triển (R&D) tất cả các dòng thang máy
        </p>
      </div>

      <Button
        isHover={true}
        text={'XEM TẤT CẢ'}
      />
    </div>
  )
}
