# `cceClusterV3` Submodule <a name="`cceClusterV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceClusterV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceClusterV3 <a name="CceClusterV3" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3 opentelekomcloud_cce_cluster_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_type: str,
  container_network_type: str,
  flavor_id: str,
  name: str,
  subnet_id: str,
  vpc_id: str,
  annotations: typing.Mapping[str] = None,
  api_access_trustlist: typing.List[str] = None,
  authenticating_proxy: CceClusterV3AuthenticatingProxy = None,
  authenticating_proxy_ca: str = None,
  authentication_mode: str = None,
  billing_mode: typing.Union[int, float] = None,
  cluster_version: str = None,
  container_network_cidr: str = None,
  delete_all_network: str = None,
  delete_all_storage: str = None,
  delete_efs: str = None,
  delete_eni: str = None,
  delete_evs: str = None,
  delete_net: str = None,
  delete_obs: str = None,
  delete_sfs: str = None,
  description: str = None,
  eip: str = None,
  enable_volume_encryption: typing.Union[bool, IResolvable] = None,
  eni_subnet_cidr: str = None,
  eni_subnet_id: str = None,
  extend_param: typing.Mapping[str] = None,
  highway_subnet_id: str = None,
  id: str = None,
  ignore_addons: typing.Union[bool, IResolvable] = None,
  ignore_certificate_clusters_data: typing.Union[bool, IResolvable] = None,
  ignore_certificate_users_data: typing.Union[bool, IResolvable] = None,
  ipv6_enable: typing.Union[bool, IResolvable] = None,
  kube_proxy_mode: str = None,
  kubernetes_svc_ip_range: str = None,
  labels: typing.Mapping[str] = None,
  masters: typing.Union[IResolvable, typing.List[CceClusterV3Masters]] = None,
  multi_az: typing.Union[bool, IResolvable] = None,
  no_addons: typing.Union[bool, IResolvable] = None,
  region: str = None,
  security_group_id: str = None,
  timeouts: CceClusterV3Timeouts = None,
  timezone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.clusterType">cluster_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.containerNetworkType">container_network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#name CceClusterV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#annotations CceClusterV3#annotations}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.apiAccessTrustlist">api_access_trustlist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#api_access_trustlist CceClusterV3#api_access_trustlist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.authenticatingProxy">authenticating_proxy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | authenticating_proxy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.authenticatingProxyCa">authenticating_proxy_ca</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.authenticationMode">authentication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.billingMode">billing_mode</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.containerNetworkCidr">container_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteAllNetwork">delete_all_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_all_network CceClusterV3#delete_all_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteAllStorage">delete_all_storage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_all_storage CceClusterV3#delete_all_storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteEfs">delete_efs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_efs CceClusterV3#delete_efs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteEni">delete_eni</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_eni CceClusterV3#delete_eni}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteEvs">delete_evs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_evs CceClusterV3#delete_evs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteNet">delete_net</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_net CceClusterV3#delete_net}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteObs">delete_obs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_obs CceClusterV3#delete_obs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteSfs">delete_sfs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_sfs CceClusterV3#delete_sfs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#description CceClusterV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.eip">eip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#eip CceClusterV3#eip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.enableVolumeEncryption">enable_volume_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#enable_volume_encryption CceClusterV3#enable_volume_encryption}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.eniSubnetCidr">eni_subnet_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.eniSubnetId">eni_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.extendParam">extend_param</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#extend_param CceClusterV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.highwaySubnetId">highway_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#id CceClusterV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ignoreAddons">ignore_addons</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ignoreCertificateClustersData">ignore_certificate_clusters_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ignore_certificate_clusters_data CceClusterV3#ignore_certificate_clusters_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ignoreCertificateUsersData">ignore_certificate_users_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ignore_certificate_users_data CceClusterV3#ignore_certificate_users_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ipv6Enable">ipv6_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ipv6_enable CceClusterV3#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.kubeProxyMode">kube_proxy_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.kubernetesSvcIpRange">kubernetes_svc_ip_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#labels CceClusterV3#labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.masters">masters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters">CceClusterV3Masters</a>]]</code> | masters block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#multi_az CceClusterV3#multi_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.noAddons">no_addons</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#no_addons CceClusterV3#no_addons}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#region CceClusterV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#security_group_id CceClusterV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#timezone CceClusterV3#timezone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.clusterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}.

---

##### `container_network_type`<sup>Required</sup> <a name="container_network_type" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.containerNetworkType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}.

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.flavorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#name CceClusterV3#name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#annotations CceClusterV3#annotations}.

---

##### `api_access_trustlist`<sup>Optional</sup> <a name="api_access_trustlist" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.apiAccessTrustlist"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#api_access_trustlist CceClusterV3#api_access_trustlist}.

---

##### `authenticating_proxy`<sup>Optional</sup> <a name="authenticating_proxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.authenticatingProxy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

authenticating_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#authenticating_proxy CceClusterV3#authenticating_proxy}

---

##### `authenticating_proxy_ca`<sup>Optional</sup> <a name="authenticating_proxy_ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.authenticatingProxyCa"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}.

---

##### `authentication_mode`<sup>Optional</sup> <a name="authentication_mode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.authenticationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}.

---

##### `billing_mode`<sup>Optional</sup> <a name="billing_mode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.billingMode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}.

---

##### `cluster_version`<sup>Optional</sup> <a name="cluster_version" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.clusterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}.

---

##### `container_network_cidr`<sup>Optional</sup> <a name="container_network_cidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.containerNetworkCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}.

---

##### `delete_all_network`<sup>Optional</sup> <a name="delete_all_network" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteAllNetwork"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_all_network CceClusterV3#delete_all_network}.

---

##### `delete_all_storage`<sup>Optional</sup> <a name="delete_all_storage" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteAllStorage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_all_storage CceClusterV3#delete_all_storage}.

---

##### `delete_efs`<sup>Optional</sup> <a name="delete_efs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteEfs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_efs CceClusterV3#delete_efs}.

---

##### `delete_eni`<sup>Optional</sup> <a name="delete_eni" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteEni"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_eni CceClusterV3#delete_eni}.

---

##### `delete_evs`<sup>Optional</sup> <a name="delete_evs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteEvs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_evs CceClusterV3#delete_evs}.

---

##### `delete_net`<sup>Optional</sup> <a name="delete_net" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteNet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_net CceClusterV3#delete_net}.

---

##### `delete_obs`<sup>Optional</sup> <a name="delete_obs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteObs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_obs CceClusterV3#delete_obs}.

---

##### `delete_sfs`<sup>Optional</sup> <a name="delete_sfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteSfs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_sfs CceClusterV3#delete_sfs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#description CceClusterV3#description}.

---

##### `eip`<sup>Optional</sup> <a name="eip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.eip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#eip CceClusterV3#eip}.

---

##### `enable_volume_encryption`<sup>Optional</sup> <a name="enable_volume_encryption" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.enableVolumeEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#enable_volume_encryption CceClusterV3#enable_volume_encryption}.

---

##### `eni_subnet_cidr`<sup>Optional</sup> <a name="eni_subnet_cidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.eniSubnetCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}.

---

##### `eni_subnet_id`<sup>Optional</sup> <a name="eni_subnet_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.eniSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}.

---

##### `extend_param`<sup>Optional</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.extendParam"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#extend_param CceClusterV3#extend_param}.

---

##### `highway_subnet_id`<sup>Optional</sup> <a name="highway_subnet_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.highwaySubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#id CceClusterV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_addons`<sup>Optional</sup> <a name="ignore_addons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ignoreAddons"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}.

---

##### `ignore_certificate_clusters_data`<sup>Optional</sup> <a name="ignore_certificate_clusters_data" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ignoreCertificateClustersData"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ignore_certificate_clusters_data CceClusterV3#ignore_certificate_clusters_data}.

---

##### `ignore_certificate_users_data`<sup>Optional</sup> <a name="ignore_certificate_users_data" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ignoreCertificateUsersData"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ignore_certificate_users_data CceClusterV3#ignore_certificate_users_data}.

---

##### `ipv6_enable`<sup>Optional</sup> <a name="ipv6_enable" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ipv6Enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ipv6_enable CceClusterV3#ipv6_enable}.

---

##### `kube_proxy_mode`<sup>Optional</sup> <a name="kube_proxy_mode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.kubeProxyMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}.

---

##### `kubernetes_svc_ip_range`<sup>Optional</sup> <a name="kubernetes_svc_ip_range" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.kubernetesSvcIpRange"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#labels CceClusterV3#labels}.

---

##### `masters`<sup>Optional</sup> <a name="masters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.masters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters">CceClusterV3Masters</a>]]

masters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#masters CceClusterV3#masters}

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.multiAz"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#multi_az CceClusterV3#multi_az}.

---

##### `no_addons`<sup>Optional</sup> <a name="no_addons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.noAddons"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#no_addons CceClusterV3#no_addons}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#region CceClusterV3#region}.

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#security_group_id CceClusterV3#security_group_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#timeouts CceClusterV3#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#timezone CceClusterV3#timezone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy">put_authenticating_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putMasters">put_masters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetApiAccessTrustlist">reset_api_access_trustlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxy">reset_authenticating_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxyCa">reset_authenticating_proxy_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticationMode">reset_authentication_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetBillingMode">reset_billing_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetClusterVersion">reset_cluster_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetContainerNetworkCidr">reset_container_network_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteAllNetwork">reset_delete_all_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteAllStorage">reset_delete_all_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEfs">reset_delete_efs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEni">reset_delete_eni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEvs">reset_delete_evs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteNet">reset_delete_net</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteObs">reset_delete_obs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteSfs">reset_delete_sfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEip">reset_eip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEnableVolumeEncryption">reset_enable_volume_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetCidr">reset_eni_subnet_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetId">reset_eni_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetExtendParam">reset_extend_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetHighwaySubnetId">reset_highway_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreAddons">reset_ignore_addons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreCertificateClustersData">reset_ignore_certificate_clusters_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreCertificateUsersData">reset_ignore_certificate_users_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIpv6Enable">reset_ipv6_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubeProxyMode">reset_kube_proxy_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubernetesSvcIpRange">reset_kubernetes_svc_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetMasters">reset_masters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetMultiAz">reset_multi_az</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetNoAddons">reset_no_addons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetSecurityGroupId">reset_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authenticating_proxy` <a name="put_authenticating_proxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy"></a>

```python
def put_authenticating_proxy(
  ca: str,
  cert: str,
  private_key: str
) -> None
```

###### `ca`<sup>Required</sup> <a name="ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy.parameter.ca"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ca CceClusterV3#ca}.

---

###### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy.parameter.cert"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#cert CceClusterV3#cert}.

---

###### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#private_key CceClusterV3#private_key}.

---

##### `put_masters` <a name="put_masters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putMasters"></a>

```python
def put_masters(
  value: typing.Union[IResolvable, typing.List[CceClusterV3Masters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putMasters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters">CceClusterV3Masters</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#create CceClusterV3#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete CceClusterV3#delete}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_api_access_trustlist` <a name="reset_api_access_trustlist" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetApiAccessTrustlist"></a>

```python
def reset_api_access_trustlist() -> None
```

##### `reset_authenticating_proxy` <a name="reset_authenticating_proxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxy"></a>

```python
def reset_authenticating_proxy() -> None
```

##### `reset_authenticating_proxy_ca` <a name="reset_authenticating_proxy_ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxyCa"></a>

```python
def reset_authenticating_proxy_ca() -> None
```

##### `reset_authentication_mode` <a name="reset_authentication_mode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticationMode"></a>

```python
def reset_authentication_mode() -> None
```

##### `reset_billing_mode` <a name="reset_billing_mode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetBillingMode"></a>

```python
def reset_billing_mode() -> None
```

##### `reset_cluster_version` <a name="reset_cluster_version" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetClusterVersion"></a>

```python
def reset_cluster_version() -> None
```

##### `reset_container_network_cidr` <a name="reset_container_network_cidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetContainerNetworkCidr"></a>

```python
def reset_container_network_cidr() -> None
```

##### `reset_delete_all_network` <a name="reset_delete_all_network" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteAllNetwork"></a>

```python
def reset_delete_all_network() -> None
```

##### `reset_delete_all_storage` <a name="reset_delete_all_storage" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteAllStorage"></a>

```python
def reset_delete_all_storage() -> None
```

##### `reset_delete_efs` <a name="reset_delete_efs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEfs"></a>

```python
def reset_delete_efs() -> None
```

##### `reset_delete_eni` <a name="reset_delete_eni" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEni"></a>

```python
def reset_delete_eni() -> None
```

##### `reset_delete_evs` <a name="reset_delete_evs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEvs"></a>

```python
def reset_delete_evs() -> None
```

##### `reset_delete_net` <a name="reset_delete_net" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteNet"></a>

```python
def reset_delete_net() -> None
```

##### `reset_delete_obs` <a name="reset_delete_obs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteObs"></a>

```python
def reset_delete_obs() -> None
```

##### `reset_delete_sfs` <a name="reset_delete_sfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteSfs"></a>

```python
def reset_delete_sfs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_eip` <a name="reset_eip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEip"></a>

```python
def reset_eip() -> None
```

##### `reset_enable_volume_encryption` <a name="reset_enable_volume_encryption" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEnableVolumeEncryption"></a>

```python
def reset_enable_volume_encryption() -> None
```

##### `reset_eni_subnet_cidr` <a name="reset_eni_subnet_cidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetCidr"></a>

```python
def reset_eni_subnet_cidr() -> None
```

##### `reset_eni_subnet_id` <a name="reset_eni_subnet_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetId"></a>

```python
def reset_eni_subnet_id() -> None
```

##### `reset_extend_param` <a name="reset_extend_param" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetExtendParam"></a>

```python
def reset_extend_param() -> None
```

##### `reset_highway_subnet_id` <a name="reset_highway_subnet_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetHighwaySubnetId"></a>

```python
def reset_highway_subnet_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_addons` <a name="reset_ignore_addons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreAddons"></a>

```python
def reset_ignore_addons() -> None
```

##### `reset_ignore_certificate_clusters_data` <a name="reset_ignore_certificate_clusters_data" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreCertificateClustersData"></a>

```python
def reset_ignore_certificate_clusters_data() -> None
```

##### `reset_ignore_certificate_users_data` <a name="reset_ignore_certificate_users_data" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreCertificateUsersData"></a>

```python
def reset_ignore_certificate_users_data() -> None
```

##### `reset_ipv6_enable` <a name="reset_ipv6_enable" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIpv6Enable"></a>

```python
def reset_ipv6_enable() -> None
```

##### `reset_kube_proxy_mode` <a name="reset_kube_proxy_mode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubeProxyMode"></a>

```python
def reset_kube_proxy_mode() -> None
```

##### `reset_kubernetes_svc_ip_range` <a name="reset_kubernetes_svc_ip_range" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubernetesSvcIpRange"></a>

```python
def reset_kubernetes_svc_ip_range() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_masters` <a name="reset_masters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetMasters"></a>

```python
def reset_masters() -> None
```

##### `reset_multi_az` <a name="reset_multi_az" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetMultiAz"></a>

```python
def reset_multi_az() -> None
```

##### `reset_no_addons` <a name="reset_no_addons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetNoAddons"></a>

```python
def reset_no_addons() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_security_group_id` <a name="reset_security_group_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetSecurityGroupId"></a>

```python
def reset_security_group_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetTimezone"></a>

```python
def reset_timezone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CceClusterV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CceClusterV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CceClusterV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CceClusterV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CceClusterV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxy">authenticating_proxy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference">CceClusterV3AuthenticatingProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateClusters">certificate_clusters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList">CceClusterV3CertificateClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateUsers">certificate_users</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList">CceClusterV3CertificateUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.external">external</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.externalOtc">external_otc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.installedAddons">installed_addons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.internal">internal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.masters">masters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList">CceClusterV3MastersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupControl">security_group_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupNode">security_group_node</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference">CceClusterV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.apiAccessTrustlistInput">api_access_trustlist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCaInput">authenticating_proxy_ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyInput">authenticating_proxy_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationModeInput">authentication_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingModeInput">billing_mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterTypeInput">cluster_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidrInput">container_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkTypeInput">container_network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllNetworkInput">delete_all_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllStorageInput">delete_all_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEfsInput">delete_efs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEniInput">delete_eni_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEvsInput">delete_evs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteNetInput">delete_net_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteObsInput">delete_obs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteSfsInput">delete_sfs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eipInput">eip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.enableVolumeEncryptionInput">enable_volume_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidrInput">eni_subnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetIdInput">eni_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParamInput">extend_param_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorIdInput">flavor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetIdInput">highway_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddonsInput">ignore_addons_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateClustersDataInput">ignore_certificate_clusters_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateUsersDataInput">ignore_certificate_users_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ipv6EnableInput">ipv6_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyModeInput">kube_proxy_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRangeInput">kubernetes_svc_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.mastersInput">masters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters">CceClusterV3Masters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAzInput">multi_az_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddonsInput">no_addons_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.apiAccessTrustlist">api_access_trustlist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCa">authenticating_proxy_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationMode">authentication_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingMode">billing_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidr">container_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkType">container_network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllNetwork">delete_all_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllStorage">delete_all_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEfs">delete_efs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEni">delete_eni</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEvs">delete_evs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteNet">delete_net</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteObs">delete_obs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteSfs">delete_sfs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eip">eip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.enableVolumeEncryption">enable_volume_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidr">eni_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetId">eni_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParam">extend_param</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetId">highway_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddons">ignore_addons</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateClustersData">ignore_certificate_clusters_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateUsersData">ignore_certificate_users_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ipv6Enable">ipv6_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyMode">kube_proxy_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRange">kubernetes_svc_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddons">no_addons</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authenticating_proxy`<sup>Required</sup> <a name="authenticating_proxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxy"></a>

```python
authenticating_proxy: CceClusterV3AuthenticatingProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference">CceClusterV3AuthenticatingProxyOutputReference</a>

---

##### `certificate_clusters`<sup>Required</sup> <a name="certificate_clusters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateClusters"></a>

```python
certificate_clusters: CceClusterV3CertificateClustersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList">CceClusterV3CertificateClustersList</a>

---

##### `certificate_users`<sup>Required</sup> <a name="certificate_users" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateUsers"></a>

```python
certificate_users: CceClusterV3CertificateUsersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList">CceClusterV3CertificateUsersList</a>

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.external"></a>

```python
external: str
```

- *Type:* str

---

##### `external_otc`<sup>Required</sup> <a name="external_otc" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.externalOtc"></a>

```python
external_otc: str
```

- *Type:* str

---

##### `installed_addons`<sup>Required</sup> <a name="installed_addons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.installedAddons"></a>

```python
installed_addons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.internal"></a>

```python
internal: str
```

- *Type:* str

---

##### `masters`<sup>Required</sup> <a name="masters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.masters"></a>

```python
masters: CceClusterV3MastersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList">CceClusterV3MastersList</a>

---

##### `security_group_control`<sup>Required</sup> <a name="security_group_control" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupControl"></a>

```python
security_group_control: str
```

- *Type:* str

---

##### `security_group_node`<sup>Required</sup> <a name="security_group_node" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupNode"></a>

```python
security_group_node: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeouts"></a>

```python
timeouts: CceClusterV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference">CceClusterV3TimeoutsOutputReference</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `api_access_trustlist_input`<sup>Optional</sup> <a name="api_access_trustlist_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.apiAccessTrustlistInput"></a>

```python
api_access_trustlist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authenticating_proxy_ca_input`<sup>Optional</sup> <a name="authenticating_proxy_ca_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCaInput"></a>

```python
authenticating_proxy_ca_input: str
```

- *Type:* str

---

##### `authenticating_proxy_input`<sup>Optional</sup> <a name="authenticating_proxy_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyInput"></a>

```python
authenticating_proxy_input: CceClusterV3AuthenticatingProxy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

---

##### `authentication_mode_input`<sup>Optional</sup> <a name="authentication_mode_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationModeInput"></a>

```python
authentication_mode_input: str
```

- *Type:* str

---

##### `billing_mode_input`<sup>Optional</sup> <a name="billing_mode_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingModeInput"></a>

```python
billing_mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_type_input`<sup>Optional</sup> <a name="cluster_type_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterTypeInput"></a>

```python
cluster_type_input: str
```

- *Type:* str

---

##### `cluster_version_input`<sup>Optional</sup> <a name="cluster_version_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersionInput"></a>

```python
cluster_version_input: str
```

- *Type:* str

---

##### `container_network_cidr_input`<sup>Optional</sup> <a name="container_network_cidr_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidrInput"></a>

```python
container_network_cidr_input: str
```

- *Type:* str

---

##### `container_network_type_input`<sup>Optional</sup> <a name="container_network_type_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkTypeInput"></a>

```python
container_network_type_input: str
```

- *Type:* str

---

##### `delete_all_network_input`<sup>Optional</sup> <a name="delete_all_network_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllNetworkInput"></a>

```python
delete_all_network_input: str
```

- *Type:* str

---

##### `delete_all_storage_input`<sup>Optional</sup> <a name="delete_all_storage_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllStorageInput"></a>

```python
delete_all_storage_input: str
```

- *Type:* str

---

##### `delete_efs_input`<sup>Optional</sup> <a name="delete_efs_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEfsInput"></a>

```python
delete_efs_input: str
```

- *Type:* str

---

##### `delete_eni_input`<sup>Optional</sup> <a name="delete_eni_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEniInput"></a>

```python
delete_eni_input: str
```

- *Type:* str

---

##### `delete_evs_input`<sup>Optional</sup> <a name="delete_evs_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEvsInput"></a>

```python
delete_evs_input: str
```

- *Type:* str

---

##### `delete_net_input`<sup>Optional</sup> <a name="delete_net_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteNetInput"></a>

```python
delete_net_input: str
```

- *Type:* str

---

##### `delete_obs_input`<sup>Optional</sup> <a name="delete_obs_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteObsInput"></a>

```python
delete_obs_input: str
```

- *Type:* str

---

##### `delete_sfs_input`<sup>Optional</sup> <a name="delete_sfs_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteSfsInput"></a>

```python
delete_sfs_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `eip_input`<sup>Optional</sup> <a name="eip_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eipInput"></a>

```python
eip_input: str
```

- *Type:* str

---

##### `enable_volume_encryption_input`<sup>Optional</sup> <a name="enable_volume_encryption_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.enableVolumeEncryptionInput"></a>

```python
enable_volume_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `eni_subnet_cidr_input`<sup>Optional</sup> <a name="eni_subnet_cidr_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidrInput"></a>

```python
eni_subnet_cidr_input: str
```

- *Type:* str

---

##### `eni_subnet_id_input`<sup>Optional</sup> <a name="eni_subnet_id_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetIdInput"></a>

```python
eni_subnet_id_input: str
```

- *Type:* str

---

##### `extend_param_input`<sup>Optional</sup> <a name="extend_param_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParamInput"></a>

```python
extend_param_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `flavor_id_input`<sup>Optional</sup> <a name="flavor_id_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorIdInput"></a>

```python
flavor_id_input: str
```

- *Type:* str

---

##### `highway_subnet_id_input`<sup>Optional</sup> <a name="highway_subnet_id_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetIdInput"></a>

```python
highway_subnet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_addons_input`<sup>Optional</sup> <a name="ignore_addons_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddonsInput"></a>

```python
ignore_addons_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_certificate_clusters_data_input`<sup>Optional</sup> <a name="ignore_certificate_clusters_data_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateClustersDataInput"></a>

```python
ignore_certificate_clusters_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_certificate_users_data_input`<sup>Optional</sup> <a name="ignore_certificate_users_data_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateUsersDataInput"></a>

```python
ignore_certificate_users_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv6_enable_input`<sup>Optional</sup> <a name="ipv6_enable_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ipv6EnableInput"></a>

```python
ipv6_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kube_proxy_mode_input`<sup>Optional</sup> <a name="kube_proxy_mode_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyModeInput"></a>

```python
kube_proxy_mode_input: str
```

- *Type:* str

---

##### `kubernetes_svc_ip_range_input`<sup>Optional</sup> <a name="kubernetes_svc_ip_range_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRangeInput"></a>

```python
kubernetes_svc_ip_range_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `masters_input`<sup>Optional</sup> <a name="masters_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.mastersInput"></a>

```python
masters_input: typing.Union[IResolvable, typing.List[CceClusterV3Masters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters">CceClusterV3Masters</a>]]

---

##### `multi_az_input`<sup>Optional</sup> <a name="multi_az_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAzInput"></a>

```python
multi_az_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `no_addons_input`<sup>Optional</sup> <a name="no_addons_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddonsInput"></a>

```python
no_addons_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CceClusterV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `api_access_trustlist`<sup>Required</sup> <a name="api_access_trustlist" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.apiAccessTrustlist"></a>

```python
api_access_trustlist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authenticating_proxy_ca`<sup>Required</sup> <a name="authenticating_proxy_ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCa"></a>

```python
authenticating_proxy_ca: str
```

- *Type:* str

---

##### `authentication_mode`<sup>Required</sup> <a name="authentication_mode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationMode"></a>

```python
authentication_mode: str
```

- *Type:* str

---

##### `billing_mode`<sup>Required</sup> <a name="billing_mode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingMode"></a>

```python
billing_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `container_network_cidr`<sup>Required</sup> <a name="container_network_cidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidr"></a>

```python
container_network_cidr: str
```

- *Type:* str

---

##### `container_network_type`<sup>Required</sup> <a name="container_network_type" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkType"></a>

```python
container_network_type: str
```

- *Type:* str

---

##### `delete_all_network`<sup>Required</sup> <a name="delete_all_network" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllNetwork"></a>

```python
delete_all_network: str
```

- *Type:* str

---

##### `delete_all_storage`<sup>Required</sup> <a name="delete_all_storage" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllStorage"></a>

```python
delete_all_storage: str
```

- *Type:* str

---

##### `delete_efs`<sup>Required</sup> <a name="delete_efs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEfs"></a>

```python
delete_efs: str
```

- *Type:* str

---

##### `delete_eni`<sup>Required</sup> <a name="delete_eni" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEni"></a>

```python
delete_eni: str
```

- *Type:* str

---

##### `delete_evs`<sup>Required</sup> <a name="delete_evs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEvs"></a>

```python
delete_evs: str
```

- *Type:* str

---

##### `delete_net`<sup>Required</sup> <a name="delete_net" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteNet"></a>

```python
delete_net: str
```

- *Type:* str

---

##### `delete_obs`<sup>Required</sup> <a name="delete_obs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteObs"></a>

```python
delete_obs: str
```

- *Type:* str

---

##### `delete_sfs`<sup>Required</sup> <a name="delete_sfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteSfs"></a>

```python
delete_sfs: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `eip`<sup>Required</sup> <a name="eip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eip"></a>

```python
eip: str
```

- *Type:* str

---

##### `enable_volume_encryption`<sup>Required</sup> <a name="enable_volume_encryption" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.enableVolumeEncryption"></a>

```python
enable_volume_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `eni_subnet_cidr`<sup>Required</sup> <a name="eni_subnet_cidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidr"></a>

```python
eni_subnet_cidr: str
```

- *Type:* str

---

##### `eni_subnet_id`<sup>Required</sup> <a name="eni_subnet_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetId"></a>

```python
eni_subnet_id: str
```

- *Type:* str

---

##### `extend_param`<sup>Required</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParam"></a>

```python
extend_param: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `highway_subnet_id`<sup>Required</sup> <a name="highway_subnet_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetId"></a>

```python
highway_subnet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_addons`<sup>Required</sup> <a name="ignore_addons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddons"></a>

```python
ignore_addons: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_certificate_clusters_data`<sup>Required</sup> <a name="ignore_certificate_clusters_data" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateClustersData"></a>

```python
ignore_certificate_clusters_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_certificate_users_data`<sup>Required</sup> <a name="ignore_certificate_users_data" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateUsersData"></a>

```python
ignore_certificate_users_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv6_enable`<sup>Required</sup> <a name="ipv6_enable" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ipv6Enable"></a>

```python
ipv6_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kube_proxy_mode`<sup>Required</sup> <a name="kube_proxy_mode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyMode"></a>

```python
kube_proxy_mode: str
```

- *Type:* str

---

##### `kubernetes_svc_ip_range`<sup>Required</sup> <a name="kubernetes_svc_ip_range" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRange"></a>

```python
kubernetes_svc_ip_range: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAz"></a>

```python
multi_az: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `no_addons`<sup>Required</sup> <a name="no_addons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddons"></a>

```python
no_addons: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CceClusterV3AuthenticatingProxy <a name="CceClusterV3AuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3AuthenticatingProxy(
  ca: str,
  cert: str,
  private_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.ca">ca</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ca CceClusterV3#ca}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.cert">cert</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#cert CceClusterV3#cert}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#private_key CceClusterV3#private_key}. |

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.ca"></a>

```python
ca: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ca CceClusterV3#ca}.

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.cert"></a>

```python
cert: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#cert CceClusterV3#cert}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#private_key CceClusterV3#private_key}.

---

### CceClusterV3CertificateClusters <a name="CceClusterV3CertificateClusters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3CertificateClusters()
```


### CceClusterV3CertificateUsers <a name="CceClusterV3CertificateUsers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3CertificateUsers()
```


### CceClusterV3Config <a name="CceClusterV3Config" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_type: str,
  container_network_type: str,
  flavor_id: str,
  name: str,
  subnet_id: str,
  vpc_id: str,
  annotations: typing.Mapping[str] = None,
  api_access_trustlist: typing.List[str] = None,
  authenticating_proxy: CceClusterV3AuthenticatingProxy = None,
  authenticating_proxy_ca: str = None,
  authentication_mode: str = None,
  billing_mode: typing.Union[int, float] = None,
  cluster_version: str = None,
  container_network_cidr: str = None,
  delete_all_network: str = None,
  delete_all_storage: str = None,
  delete_efs: str = None,
  delete_eni: str = None,
  delete_evs: str = None,
  delete_net: str = None,
  delete_obs: str = None,
  delete_sfs: str = None,
  description: str = None,
  eip: str = None,
  enable_volume_encryption: typing.Union[bool, IResolvable] = None,
  eni_subnet_cidr: str = None,
  eni_subnet_id: str = None,
  extend_param: typing.Mapping[str] = None,
  highway_subnet_id: str = None,
  id: str = None,
  ignore_addons: typing.Union[bool, IResolvable] = None,
  ignore_certificate_clusters_data: typing.Union[bool, IResolvable] = None,
  ignore_certificate_users_data: typing.Union[bool, IResolvable] = None,
  ipv6_enable: typing.Union[bool, IResolvable] = None,
  kube_proxy_mode: str = None,
  kubernetes_svc_ip_range: str = None,
  labels: typing.Mapping[str] = None,
  masters: typing.Union[IResolvable, typing.List[CceClusterV3Masters]] = None,
  multi_az: typing.Union[bool, IResolvable] = None,
  no_addons: typing.Union[bool, IResolvable] = None,
  region: str = None,
  security_group_id: str = None,
  timeouts: CceClusterV3Timeouts = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterType">cluster_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkType">container_network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#name CceClusterV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#annotations CceClusterV3#annotations}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.apiAccessTrustlist">api_access_trustlist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#api_access_trustlist CceClusterV3#api_access_trustlist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxy">authenticating_proxy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | authenticating_proxy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxyCa">authenticating_proxy_ca</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticationMode">authentication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.billingMode">billing_mode</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkCidr">container_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteAllNetwork">delete_all_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_all_network CceClusterV3#delete_all_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteAllStorage">delete_all_storage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_all_storage CceClusterV3#delete_all_storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEfs">delete_efs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_efs CceClusterV3#delete_efs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEni">delete_eni</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_eni CceClusterV3#delete_eni}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEvs">delete_evs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_evs CceClusterV3#delete_evs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteNet">delete_net</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_net CceClusterV3#delete_net}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteObs">delete_obs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_obs CceClusterV3#delete_obs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteSfs">delete_sfs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_sfs CceClusterV3#delete_sfs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#description CceClusterV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eip">eip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#eip CceClusterV3#eip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.enableVolumeEncryption">enable_volume_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#enable_volume_encryption CceClusterV3#enable_volume_encryption}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetCidr">eni_subnet_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetId">eni_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.extendParam">extend_param</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#extend_param CceClusterV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.highwaySubnetId">highway_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#id CceClusterV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreAddons">ignore_addons</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreCertificateClustersData">ignore_certificate_clusters_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ignore_certificate_clusters_data CceClusterV3#ignore_certificate_clusters_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreCertificateUsersData">ignore_certificate_users_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ignore_certificate_users_data CceClusterV3#ignore_certificate_users_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ipv6Enable">ipv6_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ipv6_enable CceClusterV3#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubeProxyMode">kube_proxy_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubernetesSvcIpRange">kubernetes_svc_ip_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#labels CceClusterV3#labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.masters">masters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters">CceClusterV3Masters</a>]]</code> | masters block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#multi_az CceClusterV3#multi_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.noAddons">no_addons</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#no_addons CceClusterV3#no_addons}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#region CceClusterV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#security_group_id CceClusterV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#timezone CceClusterV3#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}.

---

##### `container_network_type`<sup>Required</sup> <a name="container_network_type" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkType"></a>

```python
container_network_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}.

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#name CceClusterV3#name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#annotations CceClusterV3#annotations}.

---

##### `api_access_trustlist`<sup>Optional</sup> <a name="api_access_trustlist" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.apiAccessTrustlist"></a>

```python
api_access_trustlist: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#api_access_trustlist CceClusterV3#api_access_trustlist}.

---

##### `authenticating_proxy`<sup>Optional</sup> <a name="authenticating_proxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxy"></a>

```python
authenticating_proxy: CceClusterV3AuthenticatingProxy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

authenticating_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#authenticating_proxy CceClusterV3#authenticating_proxy}

---

##### `authenticating_proxy_ca`<sup>Optional</sup> <a name="authenticating_proxy_ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxyCa"></a>

```python
authenticating_proxy_ca: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}.

---

##### `authentication_mode`<sup>Optional</sup> <a name="authentication_mode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticationMode"></a>

```python
authentication_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}.

---

##### `billing_mode`<sup>Optional</sup> <a name="billing_mode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.billingMode"></a>

```python
billing_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}.

---

##### `cluster_version`<sup>Optional</sup> <a name="cluster_version" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}.

---

##### `container_network_cidr`<sup>Optional</sup> <a name="container_network_cidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkCidr"></a>

```python
container_network_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}.

---

##### `delete_all_network`<sup>Optional</sup> <a name="delete_all_network" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteAllNetwork"></a>

```python
delete_all_network: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_all_network CceClusterV3#delete_all_network}.

---

##### `delete_all_storage`<sup>Optional</sup> <a name="delete_all_storage" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteAllStorage"></a>

```python
delete_all_storage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_all_storage CceClusterV3#delete_all_storage}.

---

##### `delete_efs`<sup>Optional</sup> <a name="delete_efs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEfs"></a>

```python
delete_efs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_efs CceClusterV3#delete_efs}.

---

##### `delete_eni`<sup>Optional</sup> <a name="delete_eni" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEni"></a>

```python
delete_eni: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_eni CceClusterV3#delete_eni}.

---

##### `delete_evs`<sup>Optional</sup> <a name="delete_evs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEvs"></a>

```python
delete_evs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_evs CceClusterV3#delete_evs}.

---

##### `delete_net`<sup>Optional</sup> <a name="delete_net" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteNet"></a>

```python
delete_net: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_net CceClusterV3#delete_net}.

---

##### `delete_obs`<sup>Optional</sup> <a name="delete_obs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteObs"></a>

```python
delete_obs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_obs CceClusterV3#delete_obs}.

---

##### `delete_sfs`<sup>Optional</sup> <a name="delete_sfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteSfs"></a>

```python
delete_sfs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete_sfs CceClusterV3#delete_sfs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#description CceClusterV3#description}.

---

##### `eip`<sup>Optional</sup> <a name="eip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eip"></a>

```python
eip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#eip CceClusterV3#eip}.

---

##### `enable_volume_encryption`<sup>Optional</sup> <a name="enable_volume_encryption" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.enableVolumeEncryption"></a>

```python
enable_volume_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#enable_volume_encryption CceClusterV3#enable_volume_encryption}.

---

##### `eni_subnet_cidr`<sup>Optional</sup> <a name="eni_subnet_cidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetCidr"></a>

```python
eni_subnet_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}.

---

##### `eni_subnet_id`<sup>Optional</sup> <a name="eni_subnet_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetId"></a>

```python
eni_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}.

---

##### `extend_param`<sup>Optional</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.extendParam"></a>

```python
extend_param: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#extend_param CceClusterV3#extend_param}.

---

##### `highway_subnet_id`<sup>Optional</sup> <a name="highway_subnet_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.highwaySubnetId"></a>

```python
highway_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#id CceClusterV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_addons`<sup>Optional</sup> <a name="ignore_addons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreAddons"></a>

```python
ignore_addons: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}.

---

##### `ignore_certificate_clusters_data`<sup>Optional</sup> <a name="ignore_certificate_clusters_data" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreCertificateClustersData"></a>

```python
ignore_certificate_clusters_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ignore_certificate_clusters_data CceClusterV3#ignore_certificate_clusters_data}.

---

##### `ignore_certificate_users_data`<sup>Optional</sup> <a name="ignore_certificate_users_data" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreCertificateUsersData"></a>

```python
ignore_certificate_users_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ignore_certificate_users_data CceClusterV3#ignore_certificate_users_data}.

---

##### `ipv6_enable`<sup>Optional</sup> <a name="ipv6_enable" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ipv6Enable"></a>

```python
ipv6_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#ipv6_enable CceClusterV3#ipv6_enable}.

---

##### `kube_proxy_mode`<sup>Optional</sup> <a name="kube_proxy_mode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubeProxyMode"></a>

```python
kube_proxy_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}.

---

##### `kubernetes_svc_ip_range`<sup>Optional</sup> <a name="kubernetes_svc_ip_range" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubernetesSvcIpRange"></a>

```python
kubernetes_svc_ip_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#labels CceClusterV3#labels}.

---

##### `masters`<sup>Optional</sup> <a name="masters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.masters"></a>

```python
masters: typing.Union[IResolvable, typing.List[CceClusterV3Masters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters">CceClusterV3Masters</a>]]

masters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#masters CceClusterV3#masters}

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.multiAz"></a>

```python
multi_az: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#multi_az CceClusterV3#multi_az}.

---

##### `no_addons`<sup>Optional</sup> <a name="no_addons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.noAddons"></a>

```python
no_addons: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#no_addons CceClusterV3#no_addons}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#region CceClusterV3#region}.

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#security_group_id CceClusterV3#security_group_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.timeouts"></a>

```python
timeouts: CceClusterV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#timeouts CceClusterV3#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#timezone CceClusterV3#timezone}.

---

### CceClusterV3Masters <a name="CceClusterV3Masters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3Masters(
  availability_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#availability_zone CceClusterV3#availability_zone}. |

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#availability_zone CceClusterV3#availability_zone}.

---

### CceClusterV3Timeouts <a name="CceClusterV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#create CceClusterV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete CceClusterV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#create CceClusterV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/cce_cluster_v3#delete CceClusterV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceClusterV3AuthenticatingProxyOutputReference <a name="CceClusterV3AuthenticatingProxyOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.caInput">ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.ca">ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_input`<sup>Optional</sup> <a name="ca_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.caInput"></a>

```python
ca_input: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.ca"></a>

```python
ca: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.internalValue"></a>

```python
internal_value: CceClusterV3AuthenticatingProxy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

---


### CceClusterV3CertificateClustersList <a name="CceClusterV3CertificateClustersList" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3CertificateClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceClusterV3CertificateClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CceClusterV3CertificateClustersOutputReference <a name="CceClusterV3CertificateClustersOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3CertificateClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.certificateAuthorityData">certificate_authority_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters">CceClusterV3CertificateClusters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_data`<sup>Required</sup> <a name="certificate_authority_data" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.certificateAuthorityData"></a>

```python
certificate_authority_data: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.internalValue"></a>

```python
internal_value: CceClusterV3CertificateClusters
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters">CceClusterV3CertificateClusters</a>

---


### CceClusterV3CertificateUsersList <a name="CceClusterV3CertificateUsersList" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3CertificateUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceClusterV3CertificateUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CceClusterV3CertificateUsersOutputReference <a name="CceClusterV3CertificateUsersOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3CertificateUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientCertificateData">client_certificate_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientKeyData">client_key_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers">CceClusterV3CertificateUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_certificate_data`<sup>Required</sup> <a name="client_certificate_data" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientCertificateData"></a>

```python
client_certificate_data: str
```

- *Type:* str

---

##### `client_key_data`<sup>Required</sup> <a name="client_key_data" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientKeyData"></a>

```python
client_key_data: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.internalValue"></a>

```python
internal_value: CceClusterV3CertificateUsers
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers">CceClusterV3CertificateUsers</a>

---


### CceClusterV3MastersList <a name="CceClusterV3MastersList" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3MastersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceClusterV3MastersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters">CceClusterV3Masters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CceClusterV3Masters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters">CceClusterV3Masters</a>]]

---


### CceClusterV3MastersOutputReference <a name="CceClusterV3MastersOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3MastersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters">CceClusterV3Masters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3MastersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceClusterV3Masters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Masters">CceClusterV3Masters</a>]

---


### CceClusterV3TimeoutsOutputReference <a name="CceClusterV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_cluster_v3

cceClusterV3.CceClusterV3TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceClusterV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>]

---



