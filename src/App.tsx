import React from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import px2rem from './plugins/px2rem'

const App: React.FC = () => {
  function getOption() {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}万元 ({d}%)',
        textStyle: {
          fontSize: 24
        },
        padding: 20
      },
      legend: {
        orient: 'vertical',
        right: '0',
        itemGap: 25,
        data: [
          '设施设备',
          '教育资助',
          '督导奖励',
          '工资绩效',
          '基建维修',
          '办公经费'
        ],
        textStyle: {
          color: 'rgba(255,255,255,0.4)',
          fontSize: 20,
          padding: [0, 0, 0, 20]
        },
        inactiveColor: 'rgba(255,255,255,0.2)'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      series: [
        {
          name: '2019年基础教育经费投入',
          type: 'pie',
          radius: '70%',
          center: ['30%', '50%'],
          data: [
            {
              value: 335,
              name: '设施设备'
            },
            {
              value: 310,
              name: '教育资助'
            },
            {
              value: 234,
              name: '督导奖励'
            },
            {
              value: 135,
              name: '工资绩效'
            },
            {
              value: 1548,
              name: '基建维修'
            },
            {
              value: 1548,
              name: '办公经费'
            }
          ],
          label: {
            fontSize: 24
          }
        }
      ]
    }
  }

  return (
    <div>
      <div
        css={{
          width: px2rem(520),
          height: px2rem(246)
        }}
      >
        <div
          css={{
            fontSize: px2rem(14)
          }}
        >
          基础教育经费投入
        </div>
        <ReactEchartsCore
          css={{
            width: px2rem(500),
            height: px2rem(180)
          }}
          echarts={echarts}
          option={getOption()}
        />
      </div>
    </div>
  )
}

export default App
