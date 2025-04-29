if (typeof window.ethereum === "undefined") {
  alert("请安装 MetaMask 钱包！");
  return;
}

try {
  await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();
  const account = await signer.getAddress();
  accountDisplay.textContent = `已连接账户: ${account}`;

  contract = new ethers.Contract(contractAddress, contractABI, signer);
} catch (error) {
  console.error("连接 MetaMask 时出错:", error);
  alert("连接 MetaMask 时出错，请重试。");
}
