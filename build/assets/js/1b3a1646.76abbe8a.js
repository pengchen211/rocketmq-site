"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6675],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(g,c(c({ref:n},u),{},{components:t})):r.createElement(g,c({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4965:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],s={},i="\u4e8b\u52a1\u6d88\u606f\u53d1\u9001",l={unversionedId:"\u751f\u4ea7\u8005/09message5",id:"\u751f\u4ea7\u8005/09message5",isDocsHomePage:!1,title:"\u4e8b\u52a1\u6d88\u606f\u53d1\u9001",description:"\u5728\u4e00\u4e9b\u5bf9\u6570\u636e\u6700\u7ec8\u4e00\u81f4\u6027\u6709\u5f3a\u9700\u6c42\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u7528Apache RocketMQ \u4e8b\u52a1\u6d88\u606f\u6765\u89e3\u51b3\uff0c\u4ece\u800c\u4fdd\u8bc1\u4e0a\u4e0b\u6e38\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002",source:"@site/docs/02-\u751f\u4ea7\u8005/09message5.md",sourceDirName:"02-\u751f\u4ea7\u8005",slug:"/\u751f\u4ea7\u8005/09message5",permalink:"/docs/\u751f\u4ea7\u8005/09message5",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/02-\u751f\u4ea7\u8005/09message5.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u6279\u91cf\u6d88\u606f\u53d1\u9001",permalink:"/docs/\u751f\u4ea7\u8005/08message4"},next:{title:"\u57fa\u7840\u6982\u5ff5",permalink:"/docs/\u6d88\u8d39\u8005/11concept2"}},u=[],p={toc:u};function m(e){var n=e.components,s=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e8b\u52a1\u6d88\u606f\u53d1\u9001"},"\u4e8b\u52a1\u6d88\u606f\u53d1\u9001"),(0,o.kt)("p",null,"\u5728\u4e00\u4e9b\u5bf9\u6570\u636e\u6700\u7ec8\u4e00\u81f4\u6027\u6709\u5f3a\u9700\u6c42\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u7528Apache RocketMQ \u4e8b\u52a1\u6d88\u606f\u6765\u89e3\u51b3\uff0c\u4ece\u800c\u4fdd\u8bc1\u4e0a\u4e0b\u6e38\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u4e8b\u52a1\u6d88\u606f1",src:t(7887).Z})),(0,o.kt)("p",null,"\u4e8b\u52a1\u6d88\u606f\u53d1\u9001\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff0c\u7b2c\u4e00\u9636\u6bb5\u4f1a\u53d1\u9001\u4e00\u4e2a\u534a\u4e8b\u52a1\u6d88\u606f\uff0c\u534a\u4e8b\u52a1\u6d88\u606f\u662f\u6307\u6682\u4e0d\u80fd\u6295\u9012\u7684\u6d88\u606f\uff0c\u751f\u4ea7\u8005\u5df2\u7ecf\u6210\u529f\u5730\u5c06\u6d88\u606f\u53d1\u9001\u5230\u4e86Broker\uff0c\u4f46\u662fBroker\u672a\u6536\u5230\u751f\u4ea7\u8005\u5bf9\u8be5\u6d88\u606f\u7684\u4e8c\u6b21\u786e\u8ba4\uff0c\u6b64\u65f6\u8be5\u6d88\u606f\u88ab\u6807\u8bb0\u6210\u201c\u6682\u4e0d\u80fd\u6295\u9012\u201d\u72b6\u6001\uff0c\u5982\u679c\u53d1\u9001\u6210\u529f\u5219\u6267\u884c\u672c\u5730\u4e8b\u52a1\uff0c\u5e76\u6839\u636e\u672c\u5730\u4e8b\u52a1\u6267\u884c\u6210\u529f\u4e0e\u5426\uff0c\u5411Broker\u786e\u8ba4\u534a\u4e8b\u52a1\u6d88\u606f\u72b6\u6001\uff08commit\u6216\u8005rollback\uff09\uff0c\u534a\u4e8b\u52a1\u6d88\u606f\u53ea\u6709commit\u72b6\u6001\u624d\u4f1a\u771f\u6b63\u5411\u4e0b\u6e38\u6295\u9012\u3002\u5982\u679c\u7531\u4e8e\u7f51\u7edc\u95ea\u65ad\u3001\u751f\u4ea7\u8005\u5e94\u7528\u91cd\u542f\u7b49\u539f\u56e0\uff0c\u5bfc\u81f4\u67d0\u6761\u4e8b\u52a1\u6d88\u606f\u7684\u4e8c\u6b21\u786e\u8ba4\u4e22\u5931\uff0cBroker\u7aef\u4f1a\u901a\u8fc7\u626b\u63cf\u53d1\u73b0\u67d0\u6761\u6d88\u606f\u957f\u671f\u5904\u4e8e\u201c\u534a\u4e8b\u52a1\u6d88\u606f\u201d\u65f6\uff0c\u9700\u8981\u4e3b\u52a8\u5411\u6d88\u606f\u751f\u4ea7\u8005\u8be2\u95ee\u8be5\u6d88\u606f\u7684\u6700\u7ec8\u72b6\u6001\uff08Commit\u6216\u662fRollback\uff09\u3002\u8fd9\u6837\u6700\u7ec8\u4fdd\u8bc1\u4e86\u672c\u5730\u4e8b\u52a1\u6267\u884c\u6210\u529f\uff0c\u4e0b\u6e38\u5c31\u80fd\u6536\u5230\u6d88\u606f\uff0c\u672c\u5730\u4e8b\u52a1\u6267\u884c\u5931\u8d25\uff0c\u4e0b\u6e38\u5c31\u6536\u4e0d\u5230\u6d88\u606f\u3002\u603b\u800c\u4fdd\u8bc1\u4e86\u4e0a\u4e0b\u6e38\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"),(0,o.kt)("p",null,"\u6574\u4e2a\u4e8b\u52a1\u6d88\u606f\u7684\u8be6\u7ec6\u4ea4\u4e92\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u4e8b\u52a1\u6d88\u606f2",src:t(4693).Z})),(0,o.kt)("p",null,"\u4e8b\u52a1\u6d88\u606f\u53d1\u9001\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u751f\u4ea7\u8005\u5c06\u534a\u4e8b\u52a1\u6d88\u606f\u53d1\u9001\u81f3RocketMQ Broker\u3002"),(0,o.kt)("li",{parentName:"ol"},"RocketMQ Broker\u5c06\u6d88\u606f\u6301\u4e45\u5316\u6210\u529f\u4e4b\u540e\uff0c\u5411\u751f\u4ea7\u8005\u8fd4\u56deAck\u786e\u8ba4\u6d88\u606f\u5df2\u7ecf\u53d1\u9001\u6210\u529f\uff0c\u6b64\u65f6\u6d88\u606f\u4e3a\u534a\u4e8b\u52a1\u6d88\u606f\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u751f\u4ea7\u8005\u5f00\u59cb\u6267\u884c\u672c\u5730\u4e8b\u52a1\u903b\u8f91\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u751f\u4ea7\u8005\u6839\u636e\u672c\u5730\u4e8b\u52a1\u6267\u884c\u7ed3\u679c\u5411\u670d\u52a1\u7aef\u63d0\u4ea4\u4e8c\u6b21\u786e\u8ba4\u7ed3\u679c\uff08Commit\u6216\u662fRollback\uff09\uff0c\u670d\u52a1\u7aef\u6536\u5230\u786e\u8ba4\u7ed3\u679c\u540e\u5904\u7406\u903b\u8f91\u5982\u4e0b\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e8c\u6b21\u786e\u8ba4\u7ed3\u679c\u4e3aCommit\uff1a\u670d\u52a1\u7aef\u5c06\u534a\u4e8b\u52a1\u6d88\u606f\u6807\u8bb0\u4e3a\u53ef\u6295\u9012\uff0c\u5e76\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e8c\u6b21\u786e\u8ba4\u7ed3\u679c\u4e3aRollback\uff1a\u670d\u52a1\u7aef\u5c06\u56de\u6eda\u4e8b\u52a1\uff0c\u4e0d\u4f1a\u5c06\u534a\u4e8b\u52a1\u6d88\u606f\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u3002")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u5728\u65ad\u7f51\u6216\u8005\u662f\u751f\u4ea7\u8005\u5e94\u7528\u91cd\u542f\u7684\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u82e5\u670d\u52a1\u7aef\u672a\u6536\u5230\u53d1\u9001\u8005\u63d0\u4ea4\u7684\u4e8c\u6b21\u786e\u8ba4\u7ed3\u679c\uff0c\u6216\u670d\u52a1\u7aef\u6536\u5230\u7684\u4e8c\u6b21\u786e\u8ba4\u7ed3\u679c\u4e3aUnknown\u672a\u77e5\u72b6\u6001\uff0c\u7ecf\u8fc7\u56fa\u5b9a\u65f6\u95f4\u540e\uff0c\u670d\u52a1\u7aef\u5c06\u5bf9\u6d88\u606f\u751f\u4ea7\u8005\u5373\u751f\u4ea7\u8005\u96c6\u7fa4\u4e2d\u4efb\u4e00\u751f\u4ea7\u8005\u5b9e\u4f8b\u53d1\u8d77\u6d88\u606f\u56de\u67e5\u3002")),(0,o.kt)("p",null,"\u4e8b\u52a1\u6d88\u606f\u56de\u67e5\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u751f\u4ea7\u8005\u6536\u5230\u6d88\u606f\u56de\u67e5\u540e\uff0c\u9700\u8981\u68c0\u67e5\u5bf9\u5e94\u6d88\u606f\u7684\u672c\u5730\u4e8b\u52a1\u6267\u884c\u7684\u6700\u7ec8\u7ed3\u679c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u751f\u4ea7\u8005\u6839\u636e\u68c0\u67e5\u5f97\u5230\u7684\u672c\u5730\u4e8b\u52a1\u7684\u6700\u7ec8\u72b6\u6001\u518d\u6b21\u63d0\u4ea4\u4e8c\u6b21\u786e\u8ba4\uff0c\u670d\u52a1\u7aef\u4ecd\u6309\u7167\u6b65\u9aa44\u5bf9\u534a\u4e8b\u52a1\u6d88\u606f\u8fdb\u884c\u5904\u7406\u3002")),(0,o.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class TransactionProducer {\n    public static void main(String[] args) throws MQClientException, InterruptedException {\n        TransactionListener transactionListener = new TransactionListenerImpl();\n        TransactionMQProducer producer = new TransactionMQProducer("please_rename_unique_group_name");\n        ExecutorService executorService = new ThreadPoolExecutor(2, 5, 100, TimeUnit.SECONDS, new ArrayBlockingQueue<Runnable>(2000), new ThreadFactory() {\n            @Override\n            public Thread newThread(Runnable r) {\n                Thread thread = new Thread(r);\n                thread.setName("client-transaction-msg-check-thread");\n                return thread;\n            }\n        });\n\n        producer.setExecutorService(executorService);\n        producer.setTransactionListener(transactionListener);\n        producer.start();\n\n        String[] tags = new String[] {"TagA", "TagB", "TagC", "TagD", "TagE"};\n        for (int i = 0; i < 10; i++) {\n            try {\n                Message msg =\n                    new Message("TopicTest", tags[i % tags.length], "KEY" + i,\n                        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET));\n                SendResult sendResult = producer.sendMessageInTransaction(msg, null);\n                System.out.printf("%s%n", sendResult);\n\n                Thread.sleep(10);\n            } catch (MQClientException | UnsupportedEncodingException e) {\n                e.printStackTrace();\n            }\n        }\n\n        for (int i = 0; i < 100000; i++) {\n            Thread.sleep(1000);\n        }\n        producer.shutdown();\n    }\n\n    static class TransactionListenerImpl implements TransactionListener {\n        private AtomicInteger transactionIndex = new AtomicInteger(0);\n\n        private ConcurrentHashMap<String, Integer> localTrans = new ConcurrentHashMap<>();\n\n        @Override\n        public LocalTransactionState executeLocalTransaction(Message msg, Object arg) {\n            int value = transactionIndex.getAndIncrement();\n            int status = value % 3;\n            localTrans.put(msg.getTransactionId(), status);\n            return LocalTransactionState.UNKNOW;\n        }\n\n        @Override\n        public LocalTransactionState checkLocalTransaction(MessageExt msg) {\n            Integer status = localTrans.get(msg.getTransactionId());\n            if (null != status) {\n                switch (status) {\n                    case 0:\n                        return LocalTransactionState.UNKNOW;\n                    case 1:\n                        return LocalTransactionState.COMMIT_MESSAGE;\n                    case 2:\n                        return LocalTransactionState.ROLLBACK_MESSAGE;\n                    default:\n                        return LocalTransactionState.COMMIT_MESSAGE;\n                }\n            }\n            return LocalTransactionState.COMMIT_MESSAGE;\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u4e8b\u52a1\u6d88\u606f\u7684\u53d1\u9001\u4e0d\u518d\u4f7f\u7528DefaultMQProducer\uff0c\u800c\u662f\u4f7f\u7528TransactionMQProducer\u8fdb\u884c\u53d1\u9001\uff0c\u4e0a\u8ff0\u7684\u4f8b\u5b50\u4e2d\u8bbe\u7f6e\u4e86\u4e8b\u52a1\u56de\u67e5\u7684\u7ebf\u7a0b\u6c60\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u4e5f\u4f1a\u9ed8\u8ba4\u751f\u6210\u4e00\u4e2a\uff0c\u6700\u91cd\u8981\u7684\u662f\u9700\u8981\u5b9e\u73b0TransactionListener\u63a5\u53e3\uff0c\u5e76\u4f20\u5165TransactionMQProducer\uff0cTransactionListener\u63a5\u53e3\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface TransactionListener {\n    /**\n     * When send transactional prepare(half) message succeed, this method will be invoked to execute local transaction.\n     *\n     * @param msg Half(prepare) message\n     * @param arg Custom business parameter\n     * @return Transaction state\n     */\n    LocalTransactionState executeLocalTransaction(final Message msg, final Object arg);\n\n    /**\n     * When no response to prepare(half) message. broker will send check message to check the transaction status, and this\n     * method will be invoked to get local transaction status.\n     *\n     * @param msg Check message\n     * @return Transaction state\n     */\n    LocalTransactionState checkLocalTransaction(final MessageExt msg);\n}\n")),(0,o.kt)("p",null,"executeLocalTransaction\u662f\u534a\u4e8b\u52a1\u6d88\u606f\u53d1\u9001\u6210\u529f\u540e\uff0c\u6267\u884c\u672c\u5730\u4e8b\u52a1\u7684\u65b9\u6cd5\uff0c\u5177\u4f53\u6267\u884c\u5b8c\u672c\u5730\u4e8b\u52a1\u540e\uff0c\u53ef\u4ee5\u5728\u8be5\u65b9\u6cd5\u4e2d\u8fd4\u56de\u4ee5\u4e0b\u4e09\u79cd\u72b6\u6001\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LocalTransactionState.COMMIT_MESSAGE\uff1a\u63d0\u4ea4\u4e8b\u52a1\uff0c\u5141\u8bb8\u6d88\u8d39\u8005\u6d88\u8d39\u8be5\u6d88\u606f"),(0,o.kt)("li",{parentName:"ul"},"LocalTransactionState.ROLLBACK_MESSAGE\uff1a\u56de\u6eda\u4e8b\u52a1\uff0c\u6d88\u606f\u5c06\u88ab\u4e22\u5f03\u4e0d\u5141\u8bb8\u6d88\u8d39\u3002"),(0,o.kt)("li",{parentName:"ul"},"LocalTransactionState.UNKNOW\uff1a\u6682\u65f6\u65e0\u6cd5\u5224\u65ad\u72b6\u6001\uff0c\u7b49\u5f85\u56fa\u5b9a\u65f6\u95f4\u4ee5\u540eBroker\u7aef\u6839\u636e\u56de\u67e5\u89c4\u5219\u5411\u751f\u4ea7\u8005\u8fdb\u884c\u6d88\u606f\u56de\u67e5\u3002")),(0,o.kt)("p",null,"checkLocalTransaction\u662f\u7531\u4e8e\u4e8c\u6b21\u786e\u8ba4\u6d88\u606f\u6ca1\u6709\u6536\u5230\uff0cBroker\u7aef\u56de\u67e5\u4e8b\u52a1\u72b6\u6001\u7684\u65b9\u6cd5\u3002\u56de\u67e5\u89c4\u5219\uff1a\u672c\u5730\u4e8b\u52a1\u6267\u884c\u5b8c\u6210\u540e\uff0c\u82e5Broker\u7aef\u6536\u5230\u7684\u672c\u5730\u4e8b\u52a1\u8fd4\u56de\u72b6\u6001\u4e3aLocalTransactionState.UNKNOW\uff0c\u6216\u751f\u4ea7\u8005\u5e94\u7528\u9000\u51fa\u5bfc\u81f4\u672c\u5730\u4e8b\u52a1\u672a\u63d0\u4ea4\u4efb\u4f55\u72b6\u6001\u3002\u5219Broker\u7aef\u4f1a\u5411\u6d88\u606f\u751f\u4ea7\u8005\u53d1\u8d77\u4e8b\u52a1\u56de\u67e5\uff0c\u7b2c\u4e00\u6b21\u56de\u67e5\u540e\u4ecd\u672a\u83b7\u53d6\u5230\u4e8b\u52a1\u72b6\u6001\uff0c\u5219\u4e4b\u540e\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u4f1a\u518d\u6b21\u56de\u67e5\u3002"),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u4e8b\u52a1\u6d88\u606f\u7684\u751f\u4ea7\u7ec4\u540d\u79f0ProducerGroupName\u4e0d\u80fd\u968f\u610f\u8bbe\u7f6e\u3002\u4e8b\u52a1\u6d88\u606f\u6709\u56de\u67e5\u673a\u5236\uff0c\u56de\u67e5\u65f6Broker\u7aef\u5982\u679c\u53d1\u73b0\u539f\u59cb\u751f\u4ea7\u8005\u5df2\u7ecf\u5d29\u6e83\u5d29\u6e83\uff0c\u5219\u4f1a\u8054\u7cfb\u540c\u4e00\u751f\u4ea7\u8005\u7ec4\u7684\u5176\u4ed6\u751f\u4ea7\u8005\u5b9e\u4f8b\u56de\u67e5\u672c\u5730\u4e8b\u52a1\u6267\u884c\u60c5\u51b5\u4ee5Commit\u6216Rollback\u534a\u4e8b\u52a1\u6d88\u606f\u3002"))}m.isMDXComponent=!0},7887:function(e,n,t){n.Z=t.p+"assets/images/\u4e8b\u52a1\u6d88\u606f1-15b51f54e4cb4280459be1df277c288e.png"},4693:function(e,n,t){n.Z=t.p+"assets/images/\u4e8b\u52a1\u6d88\u606f2-2673a99678f13a471b8fc0bd4ab3bf3a.png"}}]);