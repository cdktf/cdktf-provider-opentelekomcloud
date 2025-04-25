# `cceNodeV3` Submodule <a name="`cceNodeV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceNodeV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceNodeV3 <a name="CceNodeV3" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3 opentelekomcloud_cce_node_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str,
  cluster_id: str,
  data_volumes: typing.Union[IResolvable, typing.List[CceNodeV3DataVolumes]],
  flavor_id: str,
  key_pair: str,
  root_volume: CceNodeV3RootVolume,
  agency_name: str = None,
  annotations: typing.Mapping[str] = None,
  bandwidth_charge_mode: str = None,
  bandwidth_size: typing.Union[int, float] = None,
  billing_mode: typing.Union[int, float] = None,
  dedicated_host_id: str = None,
  docker_base_size: typing.Union[int, float] = None,
  docker_lvm_config_override: str = None,
  ecs_performance_type: str = None,
  eip_count: typing.Union[int, float] = None,
  eip_ids: typing.List[str] = None,
  extend_param_charging_mode: typing.Union[int, float] = None,
  id: str = None,
  iptype: str = None,
  k8_s_tags: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  max_pods: typing.Union[int, float] = None,
  name: str = None,
  order_id: str = None,
  os: str = None,
  postinstall: str = None,
  preinstall: str = None,
  private_ip: str = None,
  product_id: str = None,
  public_key: str = None,
  region: str = None,
  runtime: str = None,
  sharetype: str = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  taints: typing.Union[IResolvable, typing.List[CceNodeV3Taints]] = None,
  timeouts: CceNodeV3Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#availability_zone CceNodeV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#cluster_id CceNodeV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.dataVolumes">data_volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>]]</code> | data_volumes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#flavor_id CceNodeV3#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#key_pair CceNodeV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.agencyName">agency_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#agency_name CceNodeV3#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#annotations CceNodeV3#annotations}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.bandwidthChargeMode">bandwidth_charge_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#bandwidth_charge_mode CceNodeV3#bandwidth_charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.bandwidthSize">bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#bandwidth_size CceNodeV3#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.billingMode">billing_mode</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#billing_mode CceNodeV3#billing_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.dedicatedHostId">dedicated_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#dedicated_host_id CceNodeV3#dedicated_host_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.dockerBaseSize">docker_base_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#docker_base_size CceNodeV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.dockerLvmConfigOverride">docker_lvm_config_override</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#docker_lvm_config_override CceNodeV3#docker_lvm_config_override}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.ecsPerformanceType">ecs_performance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#ecs_performance_type CceNodeV3#ecs_performance_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.eipCount">eip_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#eip_count CceNodeV3#eip_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.eipIds">eip_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#eip_ids CceNodeV3#eip_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.extendParamChargingMode">extend_param_charging_mode</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_param_charging_mode CceNodeV3#extend_param_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#id CceNodeV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.iptype">iptype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#iptype CceNodeV3#iptype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.k8STags">k8_s_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#k8s_tags CceNodeV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#labels CceNodeV3#labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#max_pods CceNodeV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#name CceNodeV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.orderId">order_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#order_id CceNodeV3#order_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#os CceNodeV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.postinstall">postinstall</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#postinstall CceNodeV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.preinstall">preinstall</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#preinstall CceNodeV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#private_ip CceNodeV3#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#product_id CceNodeV3#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#public_key CceNodeV3#public_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#region CceNodeV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#runtime CceNodeV3#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.sharetype">sharetype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#sharetype CceNodeV3#sharetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#subnet_id CceNodeV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#tags CceNodeV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>]]</code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#availability_zone CceNodeV3#availability_zone}.

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#cluster_id CceNodeV3#cluster_id}.

---

##### `data_volumes`<sup>Required</sup> <a name="data_volumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.dataVolumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>]]

data_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#data_volumes CceNodeV3#data_volumes}

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.flavorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#flavor_id CceNodeV3#flavor_id}.

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.keyPair"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#key_pair CceNodeV3#key_pair}.

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.rootVolume"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#root_volume CceNodeV3#root_volume}

---

##### `agency_name`<sup>Optional</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.agencyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#agency_name CceNodeV3#agency_name}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#annotations CceNodeV3#annotations}.

---

##### `bandwidth_charge_mode`<sup>Optional</sup> <a name="bandwidth_charge_mode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.bandwidthChargeMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#bandwidth_charge_mode CceNodeV3#bandwidth_charge_mode}.

---

##### `bandwidth_size`<sup>Optional</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.bandwidthSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#bandwidth_size CceNodeV3#bandwidth_size}.

---

##### `billing_mode`<sup>Optional</sup> <a name="billing_mode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.billingMode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#billing_mode CceNodeV3#billing_mode}.

---

##### `dedicated_host_id`<sup>Optional</sup> <a name="dedicated_host_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.dedicatedHostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#dedicated_host_id CceNodeV3#dedicated_host_id}.

---

##### `docker_base_size`<sup>Optional</sup> <a name="docker_base_size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.dockerBaseSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#docker_base_size CceNodeV3#docker_base_size}.

---

##### `docker_lvm_config_override`<sup>Optional</sup> <a name="docker_lvm_config_override" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.dockerLvmConfigOverride"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#docker_lvm_config_override CceNodeV3#docker_lvm_config_override}.

---

##### `ecs_performance_type`<sup>Optional</sup> <a name="ecs_performance_type" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.ecsPerformanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#ecs_performance_type CceNodeV3#ecs_performance_type}.

---

##### `eip_count`<sup>Optional</sup> <a name="eip_count" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.eipCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#eip_count CceNodeV3#eip_count}.

---

##### `eip_ids`<sup>Optional</sup> <a name="eip_ids" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.eipIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#eip_ids CceNodeV3#eip_ids}.

---

##### `extend_param_charging_mode`<sup>Optional</sup> <a name="extend_param_charging_mode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.extendParamChargingMode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_param_charging_mode CceNodeV3#extend_param_charging_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#id CceNodeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iptype`<sup>Optional</sup> <a name="iptype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.iptype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#iptype CceNodeV3#iptype}.

---

##### `k8_s_tags`<sup>Optional</sup> <a name="k8_s_tags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.k8STags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#k8s_tags CceNodeV3#k8s_tags}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#labels CceNodeV3#labels}.

---

##### `max_pods`<sup>Optional</sup> <a name="max_pods" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.maxPods"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#max_pods CceNodeV3#max_pods}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#name CceNodeV3#name}.

---

##### `order_id`<sup>Optional</sup> <a name="order_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.orderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#order_id CceNodeV3#order_id}.

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.os"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#os CceNodeV3#os}.

---

##### `postinstall`<sup>Optional</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.postinstall"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#postinstall CceNodeV3#postinstall}.

---

##### `preinstall`<sup>Optional</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.preinstall"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#preinstall CceNodeV3#preinstall}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#private_ip CceNodeV3#private_ip}.

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#product_id CceNodeV3#product_id}.

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.publicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#public_key CceNodeV3#public_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#region CceNodeV3#region}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.runtime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#runtime CceNodeV3#runtime}.

---

##### `sharetype`<sup>Optional</sup> <a name="sharetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.sharetype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#sharetype CceNodeV3#sharetype}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#subnet_id CceNodeV3#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#tags CceNodeV3#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.taints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#taints CceNodeV3#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#timeouts CceNodeV3#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putDataVolumes">put_data_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume">put_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTaints">put_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetAgencyName">reset_agency_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBandwidthChargeMode">reset_bandwidth_charge_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBandwidthSize">reset_bandwidth_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBillingMode">reset_billing_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDedicatedHostId">reset_dedicated_host_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDockerBaseSize">reset_docker_base_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDockerLvmConfigOverride">reset_docker_lvm_config_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEcsPerformanceType">reset_ecs_performance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEipCount">reset_eip_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEipIds">reset_eip_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetExtendParamChargingMode">reset_extend_param_charging_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetIptype">reset_iptype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetK8STags">reset_k8_s_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetMaxPods">reset_max_pods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOrderId">reset_order_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOs">reset_os</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPostinstall">reset_postinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPreinstall">reset_preinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetProductId">reset_product_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPublicKey">reset_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetSharetype">reset_sharetype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTaints">reset_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_volumes` <a name="put_data_volumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putDataVolumes"></a>

```python
def put_data_volumes(
  value: typing.Union[IResolvable, typing.List[CceNodeV3DataVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putDataVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>]]

---

##### `put_root_volume` <a name="put_root_volume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume"></a>

```python
def put_root_volume(
  size: typing.Union[int, float],
  volumetype: str,
  extend_param: str = None,
  extend_params: typing.Mapping[str] = None,
  kms_id: str = None
) -> None
```

###### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#size CceNodeV3#size}.

---

###### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume.parameter.volumetype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}.

---

###### `extend_param`<sup>Optional</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume.parameter.extendParam"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}.

---

###### `extend_params`<sup>Optional</sup> <a name="extend_params" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume.parameter.extendParams"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}.

---

###### `kms_id`<sup>Optional</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume.parameter.kmsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}.

---

##### `put_taints` <a name="put_taints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTaints"></a>

```python
def put_taints(
  value: typing.Union[IResolvable, typing.List[CceNodeV3Taints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTaints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#create CceNodeV3#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#delete CceNodeV3#delete}.

---

##### `reset_agency_name` <a name="reset_agency_name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetAgencyName"></a>

```python
def reset_agency_name() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_bandwidth_charge_mode` <a name="reset_bandwidth_charge_mode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBandwidthChargeMode"></a>

```python
def reset_bandwidth_charge_mode() -> None
```

##### `reset_bandwidth_size` <a name="reset_bandwidth_size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBandwidthSize"></a>

```python
def reset_bandwidth_size() -> None
```

##### `reset_billing_mode` <a name="reset_billing_mode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBillingMode"></a>

```python
def reset_billing_mode() -> None
```

##### `reset_dedicated_host_id` <a name="reset_dedicated_host_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDedicatedHostId"></a>

```python
def reset_dedicated_host_id() -> None
```

##### `reset_docker_base_size` <a name="reset_docker_base_size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDockerBaseSize"></a>

```python
def reset_docker_base_size() -> None
```

##### `reset_docker_lvm_config_override` <a name="reset_docker_lvm_config_override" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDockerLvmConfigOverride"></a>

```python
def reset_docker_lvm_config_override() -> None
```

##### `reset_ecs_performance_type` <a name="reset_ecs_performance_type" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEcsPerformanceType"></a>

```python
def reset_ecs_performance_type() -> None
```

##### `reset_eip_count` <a name="reset_eip_count" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEipCount"></a>

```python
def reset_eip_count() -> None
```

##### `reset_eip_ids` <a name="reset_eip_ids" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEipIds"></a>

```python
def reset_eip_ids() -> None
```

##### `reset_extend_param_charging_mode` <a name="reset_extend_param_charging_mode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetExtendParamChargingMode"></a>

```python
def reset_extend_param_charging_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_iptype` <a name="reset_iptype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetIptype"></a>

```python
def reset_iptype() -> None
```

##### `reset_k8_s_tags` <a name="reset_k8_s_tags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetK8STags"></a>

```python
def reset_k8_s_tags() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_max_pods` <a name="reset_max_pods" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetMaxPods"></a>

```python
def reset_max_pods() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_order_id` <a name="reset_order_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOrderId"></a>

```python
def reset_order_id() -> None
```

##### `reset_os` <a name="reset_os" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOs"></a>

```python
def reset_os() -> None
```

##### `reset_postinstall` <a name="reset_postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPostinstall"></a>

```python
def reset_postinstall() -> None
```

##### `reset_preinstall` <a name="reset_preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPreinstall"></a>

```python
def reset_preinstall() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_product_id` <a name="reset_product_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetProductId"></a>

```python
def reset_product_id() -> None
```

##### `reset_public_key` <a name="reset_public_key" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPublicKey"></a>

```python
def reset_public_key() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_sharetype` <a name="reset_sharetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetSharetype"></a>

```python
def reset_sharetype() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_taints` <a name="reset_taints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTaints"></a>

```python
def reset_taints() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CceNodeV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CceNodeV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CceNodeV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CceNodeV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CceNodeV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dataVolumes">data_volumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList">CceNodeV3DataVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference">CceNodeV3RootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList">CceNodeV3TaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference">CceNodeV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.agencyNameInput">agency_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthChargeModeInput">bandwidth_charge_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthSizeInput">bandwidth_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.billingModeInput">billing_mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dataVolumesInput">data_volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dedicatedHostIdInput">dedicated_host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerBaseSizeInput">docker_base_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerLvmConfigOverrideInput">docker_lvm_config_override_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.ecsPerformanceTypeInput">ecs_performance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipCountInput">eip_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipIdsInput">eip_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.extendParamChargingModeInput">extend_param_charging_mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.flavorIdInput">flavor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.iptypeInput">iptype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.k8STagsInput">k8_s_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.keyPairInput">key_pair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.maxPodsInput">max_pods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.orderIdInput">order_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.osInput">os_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.postinstallInput">postinstall_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.preinstallInput">preinstall_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.rootVolumeInput">root_volume_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.sharetypeInput">sharetype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.taintsInput">taints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.agencyName">agency_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthChargeMode">bandwidth_charge_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthSize">bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.billingMode">billing_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dedicatedHostId">dedicated_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerBaseSize">docker_base_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerLvmConfigOverride">docker_lvm_config_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.ecsPerformanceType">ecs_performance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipCount">eip_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipIds">eip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.extendParamChargingMode">extend_param_charging_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.iptype">iptype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.k8STags">k8_s_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.orderId">order_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.postinstall">postinstall</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.preinstall">preinstall</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.sharetype">sharetype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_volumes`<sup>Required</sup> <a name="data_volumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dataVolumes"></a>

```python
data_volumes: CceNodeV3DataVolumesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList">CceNodeV3DataVolumesList</a>

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.rootVolume"></a>

```python
root_volume: CceNodeV3RootVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference">CceNodeV3RootVolumeOutputReference</a>

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.taints"></a>

```python
taints: CceNodeV3TaintsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList">CceNodeV3TaintsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.timeouts"></a>

```python
timeouts: CceNodeV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference">CceNodeV3TimeoutsOutputReference</a>

---

##### `agency_name_input`<sup>Optional</sup> <a name="agency_name_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.agencyNameInput"></a>

```python
agency_name_input: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `bandwidth_charge_mode_input`<sup>Optional</sup> <a name="bandwidth_charge_mode_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthChargeModeInput"></a>

```python
bandwidth_charge_mode_input: str
```

- *Type:* str

---

##### `bandwidth_size_input`<sup>Optional</sup> <a name="bandwidth_size_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthSizeInput"></a>

```python
bandwidth_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `billing_mode_input`<sup>Optional</sup> <a name="billing_mode_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.billingModeInput"></a>

```python
billing_mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `data_volumes_input`<sup>Optional</sup> <a name="data_volumes_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dataVolumesInput"></a>

```python
data_volumes_input: typing.Union[IResolvable, typing.List[CceNodeV3DataVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>]]

---

##### `dedicated_host_id_input`<sup>Optional</sup> <a name="dedicated_host_id_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dedicatedHostIdInput"></a>

```python
dedicated_host_id_input: str
```

- *Type:* str

---

##### `docker_base_size_input`<sup>Optional</sup> <a name="docker_base_size_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerBaseSizeInput"></a>

```python
docker_base_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `docker_lvm_config_override_input`<sup>Optional</sup> <a name="docker_lvm_config_override_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerLvmConfigOverrideInput"></a>

```python
docker_lvm_config_override_input: str
```

- *Type:* str

---

##### `ecs_performance_type_input`<sup>Optional</sup> <a name="ecs_performance_type_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.ecsPerformanceTypeInput"></a>

```python
ecs_performance_type_input: str
```

- *Type:* str

---

##### `eip_count_input`<sup>Optional</sup> <a name="eip_count_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipCountInput"></a>

```python
eip_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `eip_ids_input`<sup>Optional</sup> <a name="eip_ids_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipIdsInput"></a>

```python
eip_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `extend_param_charging_mode_input`<sup>Optional</sup> <a name="extend_param_charging_mode_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.extendParamChargingModeInput"></a>

```python
extend_param_charging_mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `flavor_id_input`<sup>Optional</sup> <a name="flavor_id_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.flavorIdInput"></a>

```python
flavor_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iptype_input`<sup>Optional</sup> <a name="iptype_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.iptypeInput"></a>

```python
iptype_input: str
```

- *Type:* str

---

##### `k8_s_tags_input`<sup>Optional</sup> <a name="k8_s_tags_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.k8STagsInput"></a>

```python
k8_s_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_pair_input`<sup>Optional</sup> <a name="key_pair_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.keyPairInput"></a>

```python
key_pair_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_pods_input`<sup>Optional</sup> <a name="max_pods_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.maxPodsInput"></a>

```python
max_pods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `order_id_input`<sup>Optional</sup> <a name="order_id_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.orderIdInput"></a>

```python
order_id_input: str
```

- *Type:* str

---

##### `os_input`<sup>Optional</sup> <a name="os_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.osInput"></a>

```python
os_input: str
```

- *Type:* str

---

##### `postinstall_input`<sup>Optional</sup> <a name="postinstall_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.postinstallInput"></a>

```python
postinstall_input: str
```

- *Type:* str

---

##### `preinstall_input`<sup>Optional</sup> <a name="preinstall_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.preinstallInput"></a>

```python
preinstall_input: str
```

- *Type:* str

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `root_volume_input`<sup>Optional</sup> <a name="root_volume_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.rootVolumeInput"></a>

```python
root_volume_input: CceNodeV3RootVolume
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a>

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `sharetype_input`<sup>Optional</sup> <a name="sharetype_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.sharetypeInput"></a>

```python
sharetype_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `taints_input`<sup>Optional</sup> <a name="taints_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.taintsInput"></a>

```python
taints_input: typing.Union[IResolvable, typing.List[CceNodeV3Taints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CceNodeV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a>]

---

##### `agency_name`<sup>Required</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.agencyName"></a>

```python
agency_name: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `bandwidth_charge_mode`<sup>Required</sup> <a name="bandwidth_charge_mode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthChargeMode"></a>

```python
bandwidth_charge_mode: str
```

- *Type:* str

---

##### `bandwidth_size`<sup>Required</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthSize"></a>

```python
bandwidth_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `billing_mode`<sup>Required</sup> <a name="billing_mode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.billingMode"></a>

```python
billing_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `dedicated_host_id`<sup>Required</sup> <a name="dedicated_host_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dedicatedHostId"></a>

```python
dedicated_host_id: str
```

- *Type:* str

---

##### `docker_base_size`<sup>Required</sup> <a name="docker_base_size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerBaseSize"></a>

```python
docker_base_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `docker_lvm_config_override`<sup>Required</sup> <a name="docker_lvm_config_override" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerLvmConfigOverride"></a>

```python
docker_lvm_config_override: str
```

- *Type:* str

---

##### `ecs_performance_type`<sup>Required</sup> <a name="ecs_performance_type" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.ecsPerformanceType"></a>

```python
ecs_performance_type: str
```

- *Type:* str

---

##### `eip_count`<sup>Required</sup> <a name="eip_count" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipCount"></a>

```python
eip_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `eip_ids`<sup>Required</sup> <a name="eip_ids" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipIds"></a>

```python
eip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `extend_param_charging_mode`<sup>Required</sup> <a name="extend_param_charging_mode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.extendParamChargingMode"></a>

```python
extend_param_charging_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iptype`<sup>Required</sup> <a name="iptype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.iptype"></a>

```python
iptype: str
```

- *Type:* str

---

##### `k8_s_tags`<sup>Required</sup> <a name="k8_s_tags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.k8STags"></a>

```python
k8_s_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_pods`<sup>Required</sup> <a name="max_pods" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.maxPods"></a>

```python
max_pods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `postinstall`<sup>Required</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.postinstall"></a>

```python
postinstall: str
```

- *Type:* str

---

##### `preinstall`<sup>Required</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.preinstall"></a>

```python
preinstall: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `sharetype`<sup>Required</sup> <a name="sharetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.sharetype"></a>

```python
sharetype: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CceNodeV3Config <a name="CceNodeV3Config" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str,
  cluster_id: str,
  data_volumes: typing.Union[IResolvable, typing.List[CceNodeV3DataVolumes]],
  flavor_id: str,
  key_pair: str,
  root_volume: CceNodeV3RootVolume,
  agency_name: str = None,
  annotations: typing.Mapping[str] = None,
  bandwidth_charge_mode: str = None,
  bandwidth_size: typing.Union[int, float] = None,
  billing_mode: typing.Union[int, float] = None,
  dedicated_host_id: str = None,
  docker_base_size: typing.Union[int, float] = None,
  docker_lvm_config_override: str = None,
  ecs_performance_type: str = None,
  eip_count: typing.Union[int, float] = None,
  eip_ids: typing.List[str] = None,
  extend_param_charging_mode: typing.Union[int, float] = None,
  id: str = None,
  iptype: str = None,
  k8_s_tags: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  max_pods: typing.Union[int, float] = None,
  name: str = None,
  order_id: str = None,
  os: str = None,
  postinstall: str = None,
  preinstall: str = None,
  private_ip: str = None,
  product_id: str = None,
  public_key: str = None,
  region: str = None,
  runtime: str = None,
  sharetype: str = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  taints: typing.Union[IResolvable, typing.List[CceNodeV3Taints]] = None,
  timeouts: CceNodeV3Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#availability_zone CceNodeV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#cluster_id CceNodeV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dataVolumes">data_volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>]]</code> | data_volumes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#flavor_id CceNodeV3#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#key_pair CceNodeV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.agencyName">agency_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#agency_name CceNodeV3#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#annotations CceNodeV3#annotations}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.bandwidthChargeMode">bandwidth_charge_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#bandwidth_charge_mode CceNodeV3#bandwidth_charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.bandwidthSize">bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#bandwidth_size CceNodeV3#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.billingMode">billing_mode</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#billing_mode CceNodeV3#billing_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dedicatedHostId">dedicated_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#dedicated_host_id CceNodeV3#dedicated_host_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dockerBaseSize">docker_base_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#docker_base_size CceNodeV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dockerLvmConfigOverride">docker_lvm_config_override</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#docker_lvm_config_override CceNodeV3#docker_lvm_config_override}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.ecsPerformanceType">ecs_performance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#ecs_performance_type CceNodeV3#ecs_performance_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.eipCount">eip_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#eip_count CceNodeV3#eip_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.eipIds">eip_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#eip_ids CceNodeV3#eip_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.extendParamChargingMode">extend_param_charging_mode</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_param_charging_mode CceNodeV3#extend_param_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#id CceNodeV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.iptype">iptype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#iptype CceNodeV3#iptype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.k8STags">k8_s_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#k8s_tags CceNodeV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#labels CceNodeV3#labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#max_pods CceNodeV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#name CceNodeV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.orderId">order_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#order_id CceNodeV3#order_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#os CceNodeV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.postinstall">postinstall</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#postinstall CceNodeV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.preinstall">preinstall</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#preinstall CceNodeV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#private_ip CceNodeV3#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#product_id CceNodeV3#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#public_key CceNodeV3#public_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#region CceNodeV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#runtime CceNodeV3#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.sharetype">sharetype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#sharetype CceNodeV3#sharetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#subnet_id CceNodeV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#tags CceNodeV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>]]</code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#availability_zone CceNodeV3#availability_zone}.

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#cluster_id CceNodeV3#cluster_id}.

---

##### `data_volumes`<sup>Required</sup> <a name="data_volumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dataVolumes"></a>

```python
data_volumes: typing.Union[IResolvable, typing.List[CceNodeV3DataVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>]]

data_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#data_volumes CceNodeV3#data_volumes}

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#flavor_id CceNodeV3#flavor_id}.

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#key_pair CceNodeV3#key_pair}.

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.rootVolume"></a>

```python
root_volume: CceNodeV3RootVolume
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#root_volume CceNodeV3#root_volume}

---

##### `agency_name`<sup>Optional</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.agencyName"></a>

```python
agency_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#agency_name CceNodeV3#agency_name}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#annotations CceNodeV3#annotations}.

---

##### `bandwidth_charge_mode`<sup>Optional</sup> <a name="bandwidth_charge_mode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.bandwidthChargeMode"></a>

```python
bandwidth_charge_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#bandwidth_charge_mode CceNodeV3#bandwidth_charge_mode}.

---

##### `bandwidth_size`<sup>Optional</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.bandwidthSize"></a>

```python
bandwidth_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#bandwidth_size CceNodeV3#bandwidth_size}.

---

##### `billing_mode`<sup>Optional</sup> <a name="billing_mode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.billingMode"></a>

```python
billing_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#billing_mode CceNodeV3#billing_mode}.

---

##### `dedicated_host_id`<sup>Optional</sup> <a name="dedicated_host_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dedicatedHostId"></a>

```python
dedicated_host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#dedicated_host_id CceNodeV3#dedicated_host_id}.

---

##### `docker_base_size`<sup>Optional</sup> <a name="docker_base_size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dockerBaseSize"></a>

```python
docker_base_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#docker_base_size CceNodeV3#docker_base_size}.

---

##### `docker_lvm_config_override`<sup>Optional</sup> <a name="docker_lvm_config_override" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dockerLvmConfigOverride"></a>

```python
docker_lvm_config_override: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#docker_lvm_config_override CceNodeV3#docker_lvm_config_override}.

---

##### `ecs_performance_type`<sup>Optional</sup> <a name="ecs_performance_type" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.ecsPerformanceType"></a>

```python
ecs_performance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#ecs_performance_type CceNodeV3#ecs_performance_type}.

---

##### `eip_count`<sup>Optional</sup> <a name="eip_count" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.eipCount"></a>

```python
eip_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#eip_count CceNodeV3#eip_count}.

---

##### `eip_ids`<sup>Optional</sup> <a name="eip_ids" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.eipIds"></a>

```python
eip_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#eip_ids CceNodeV3#eip_ids}.

---

##### `extend_param_charging_mode`<sup>Optional</sup> <a name="extend_param_charging_mode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.extendParamChargingMode"></a>

```python
extend_param_charging_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_param_charging_mode CceNodeV3#extend_param_charging_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#id CceNodeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iptype`<sup>Optional</sup> <a name="iptype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.iptype"></a>

```python
iptype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#iptype CceNodeV3#iptype}.

---

##### `k8_s_tags`<sup>Optional</sup> <a name="k8_s_tags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.k8STags"></a>

```python
k8_s_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#k8s_tags CceNodeV3#k8s_tags}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#labels CceNodeV3#labels}.

---

##### `max_pods`<sup>Optional</sup> <a name="max_pods" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.maxPods"></a>

```python
max_pods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#max_pods CceNodeV3#max_pods}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#name CceNodeV3#name}.

---

##### `order_id`<sup>Optional</sup> <a name="order_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#order_id CceNodeV3#order_id}.

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.os"></a>

```python
os: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#os CceNodeV3#os}.

---

##### `postinstall`<sup>Optional</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.postinstall"></a>

```python
postinstall: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#postinstall CceNodeV3#postinstall}.

---

##### `preinstall`<sup>Optional</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.preinstall"></a>

```python
preinstall: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#preinstall CceNodeV3#preinstall}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#private_ip CceNodeV3#private_ip}.

---

##### `product_id`<sup>Optional</sup> <a name="product_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#product_id CceNodeV3#product_id}.

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#public_key CceNodeV3#public_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#region CceNodeV3#region}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#runtime CceNodeV3#runtime}.

---

##### `sharetype`<sup>Optional</sup> <a name="sharetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.sharetype"></a>

```python
sharetype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#sharetype CceNodeV3#sharetype}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#subnet_id CceNodeV3#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#tags CceNodeV3#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.taints"></a>

```python
taints: typing.Union[IResolvable, typing.List[CceNodeV3Taints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#taints CceNodeV3#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.timeouts"></a>

```python
timeouts: CceNodeV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#timeouts CceNodeV3#timeouts}

---

### CceNodeV3DataVolumes <a name="CceNodeV3DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3DataVolumes(
  size: typing.Union[int, float],
  volumetype: str,
  extend_param: str = None,
  extend_params: typing.Mapping[str] = None,
  kms_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#size CceNodeV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.volumetype">volumetype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.extendParam">extend_param</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.extendParams">extend_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.kmsId">kms_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#size CceNodeV3#size}.

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.volumetype"></a>

```python
volumetype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}.

---

##### `extend_param`<sup>Optional</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.extendParam"></a>

```python
extend_param: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}.

---

##### `extend_params`<sup>Optional</sup> <a name="extend_params" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.extendParams"></a>

```python
extend_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}.

---

##### `kms_id`<sup>Optional</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.kmsId"></a>

```python
kms_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}.

---

### CceNodeV3RootVolume <a name="CceNodeV3RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3RootVolume(
  size: typing.Union[int, float],
  volumetype: str,
  extend_param: str = None,
  extend_params: typing.Mapping[str] = None,
  kms_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#size CceNodeV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.volumetype">volumetype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.extendParam">extend_param</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.extendParams">extend_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.kmsId">kms_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#size CceNodeV3#size}.

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.volumetype"></a>

```python
volumetype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}.

---

##### `extend_param`<sup>Optional</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.extendParam"></a>

```python
extend_param: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}.

---

##### `extend_params`<sup>Optional</sup> <a name="extend_params" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.extendParams"></a>

```python
extend_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}.

---

##### `kms_id`<sup>Optional</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.kmsId"></a>

```python
kms_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}.

---

### CceNodeV3Taints <a name="CceNodeV3Taints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3Taints(
  effect: str,
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#effect CceNodeV3#effect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#key CceNodeV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#value CceNodeV3#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#effect CceNodeV3#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#key CceNodeV3#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#value CceNodeV3#value}.

---

### CceNodeV3Timeouts <a name="CceNodeV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#create CceNodeV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#delete CceNodeV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#create CceNodeV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.37/docs/resources/cce_node_v3#delete CceNodeV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceNodeV3DataVolumesList <a name="CceNodeV3DataVolumesList" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3DataVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceNodeV3DataVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CceNodeV3DataVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>]]

---


### CceNodeV3DataVolumesOutputReference <a name="CceNodeV3DataVolumesOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3DataVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetExtendParam">reset_extend_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetExtendParams">reset_extend_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetKmsId">reset_kms_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_extend_param` <a name="reset_extend_param" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetExtendParam"></a>

```python
def reset_extend_param() -> None
```

##### `reset_extend_params` <a name="reset_extend_params" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetExtendParams"></a>

```python
def reset_extend_params() -> None
```

##### `reset_kms_id` <a name="reset_kms_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetKmsId"></a>

```python
def reset_kms_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParamInput">extend_param_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParamsInput">extend_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.kmsIdInput">kms_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.volumetypeInput">volumetype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParam">extend_param</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParams">extend_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.kmsId">kms_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.volumetype">volumetype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extend_param_input`<sup>Optional</sup> <a name="extend_param_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParamInput"></a>

```python
extend_param_input: str
```

- *Type:* str

---

##### `extend_params_input`<sup>Optional</sup> <a name="extend_params_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParamsInput"></a>

```python
extend_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_id_input`<sup>Optional</sup> <a name="kms_id_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.kmsIdInput"></a>

```python
kms_id_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumetype_input`<sup>Optional</sup> <a name="volumetype_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.volumetypeInput"></a>

```python
volumetype_input: str
```

- *Type:* str

---

##### `extend_param`<sup>Required</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParam"></a>

```python
extend_param: str
```

- *Type:* str

---

##### `extend_params`<sup>Required</sup> <a name="extend_params" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParams"></a>

```python
extend_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_id`<sup>Required</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.kmsId"></a>

```python
kms_id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.volumetype"></a>

```python
volumetype: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceNodeV3DataVolumes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>]

---


### CceNodeV3RootVolumeOutputReference <a name="CceNodeV3RootVolumeOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3RootVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetExtendParam">reset_extend_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetExtendParams">reset_extend_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetKmsId">reset_kms_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_extend_param` <a name="reset_extend_param" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetExtendParam"></a>

```python
def reset_extend_param() -> None
```

##### `reset_extend_params` <a name="reset_extend_params" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetExtendParams"></a>

```python
def reset_extend_params() -> None
```

##### `reset_kms_id` <a name="reset_kms_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetKmsId"></a>

```python
def reset_kms_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParamInput">extend_param_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParamsInput">extend_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.kmsIdInput">kms_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.volumetypeInput">volumetype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParam">extend_param</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParams">extend_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.kmsId">kms_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.volumetype">volumetype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extend_param_input`<sup>Optional</sup> <a name="extend_param_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParamInput"></a>

```python
extend_param_input: str
```

- *Type:* str

---

##### `extend_params_input`<sup>Optional</sup> <a name="extend_params_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParamsInput"></a>

```python
extend_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_id_input`<sup>Optional</sup> <a name="kms_id_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.kmsIdInput"></a>

```python
kms_id_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumetype_input`<sup>Optional</sup> <a name="volumetype_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.volumetypeInput"></a>

```python
volumetype_input: str
```

- *Type:* str

---

##### `extend_param`<sup>Required</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParam"></a>

```python
extend_param: str
```

- *Type:* str

---

##### `extend_params`<sup>Required</sup> <a name="extend_params" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParams"></a>

```python
extend_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_id`<sup>Required</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.kmsId"></a>

```python
kms_id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.volumetype"></a>

```python
volumetype: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.internalValue"></a>

```python
internal_value: CceNodeV3RootVolume
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a>

---


### CceNodeV3TaintsList <a name="CceNodeV3TaintsList" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3TaintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceNodeV3TaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CceNodeV3Taints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>]]

---


### CceNodeV3TaintsOutputReference <a name="CceNodeV3TaintsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3TaintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceNodeV3Taints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>]

---


### CceNodeV3TimeoutsOutputReference <a name="CceNodeV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_v3

cceNodeV3.CceNodeV3TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceNodeV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a>]

---



