# `cceNodePoolV3` Submodule <a name="`cceNodePoolV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceNodePoolV3 <a name="CceNodePoolV3" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3 opentelekomcloud_cce_node_pool_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  data_volumes: typing.Union[IResolvable, typing.List[CceNodePoolV3DataVolumes]],
  flavor: str,
  initial_node_count: typing.Union[int, float],
  name: str,
  root_volume: CceNodePoolV3RootVolume,
  agency_name: str = None,
  availability_zone: str = None,
  docker_base_size: typing.Union[int, float] = None,
  docker_lvm_config_override: str = None,
  id: str = None,
  k8_s_tags: typing.Mapping[str] = None,
  key_pair: str = None,
  max_node_count: typing.Union[int, float] = None,
  max_pods: typing.Union[int, float] = None,
  min_node_count: typing.Union[int, float] = None,
  os: str = None,
  password: str = None,
  postinstall: str = None,
  preinstall: str = None,
  priority: typing.Union[int, float] = None,
  runtime: str = None,
  scale_down_cooldown_time: typing.Union[int, float] = None,
  scale_enable: typing.Union[bool, IResolvable] = None,
  server_group_reference: str = None,
  subnet_id: str = None,
  taints: typing.Union[IResolvable, typing.List[CceNodePoolV3Taints]] = None,
  timeouts: CceNodePoolV3Timeouts = None,
  user_tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#cluster_id CceNodePoolV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dataVolumes">data_volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>]]</code> | data_volumes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.flavor">flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#flavor CceNodePoolV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.initialNodeCount">initial_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#initial_node_count CceNodePoolV3#initial_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#name CceNodePoolV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.agencyName">agency_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#agency_name CceNodePoolV3#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#availability_zone CceNodePoolV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dockerBaseSize">docker_base_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#docker_base_size CceNodePoolV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dockerLvmConfigOverride">docker_lvm_config_override</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#id CceNodePoolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.k8STags">k8_s_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#k8s_tags CceNodePoolV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#key_pair CceNodePoolV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#max_node_count CceNodePoolV3#max_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#max_pods CceNodePoolV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#min_node_count CceNodePoolV3#min_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#os CceNodePoolV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#password CceNodePoolV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.postinstall">postinstall</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#postinstall CceNodePoolV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.preinstall">preinstall</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#preinstall CceNodePoolV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#priority CceNodePoolV3#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#runtime CceNodePoolV3#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scaleDownCooldownTime">scale_down_cooldown_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scaleEnable">scale_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#scale_enable CceNodePoolV3#scale_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.serverGroupReference">server_group_reference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#server_group_reference CceNodePoolV3#server_group_reference}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#subnet_id CceNodePoolV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>]]</code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.userTags">user_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#user_tags CceNodePoolV3#user_tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#cluster_id CceNodePoolV3#cluster_id}.

---

##### `data_volumes`<sup>Required</sup> <a name="data_volumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dataVolumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>]]

data_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#data_volumes CceNodePoolV3#data_volumes}

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.flavor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#flavor CceNodePoolV3#flavor}.

---

##### `initial_node_count`<sup>Required</sup> <a name="initial_node_count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.initialNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#initial_node_count CceNodePoolV3#initial_node_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#name CceNodePoolV3#name}.

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.rootVolume"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#root_volume CceNodePoolV3#root_volume}

---

##### `agency_name`<sup>Optional</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.agencyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#agency_name CceNodePoolV3#agency_name}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#availability_zone CceNodePoolV3#availability_zone}.

---

##### `docker_base_size`<sup>Optional</sup> <a name="docker_base_size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dockerBaseSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#docker_base_size CceNodePoolV3#docker_base_size}.

---

##### `docker_lvm_config_override`<sup>Optional</sup> <a name="docker_lvm_config_override" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dockerLvmConfigOverride"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#id CceNodePoolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `k8_s_tags`<sup>Optional</sup> <a name="k8_s_tags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.k8STags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#k8s_tags CceNodePoolV3#k8s_tags}.

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.keyPair"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#key_pair CceNodePoolV3#key_pair}.

---

##### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#max_node_count CceNodePoolV3#max_node_count}.

---

##### `max_pods`<sup>Optional</sup> <a name="max_pods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.maxPods"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#max_pods CceNodePoolV3#max_pods}.

---

##### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#min_node_count CceNodePoolV3#min_node_count}.

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.os"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#os CceNodePoolV3#os}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#password CceNodePoolV3#password}.

---

##### `postinstall`<sup>Optional</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.postinstall"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#postinstall CceNodePoolV3#postinstall}.

---

##### `preinstall`<sup>Optional</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.preinstall"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#preinstall CceNodePoolV3#preinstall}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#priority CceNodePoolV3#priority}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.runtime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#runtime CceNodePoolV3#runtime}.

---

##### `scale_down_cooldown_time`<sup>Optional</sup> <a name="scale_down_cooldown_time" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scaleDownCooldownTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}.

---

##### `scale_enable`<sup>Optional</sup> <a name="scale_enable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scaleEnable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#scale_enable CceNodePoolV3#scale_enable}.

---

##### `server_group_reference`<sup>Optional</sup> <a name="server_group_reference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.serverGroupReference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#server_group_reference CceNodePoolV3#server_group_reference}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#subnet_id CceNodePoolV3#subnet_id}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.taints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#taints CceNodePoolV3#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#timeouts CceNodePoolV3#timeouts}

---

##### `user_tags`<sup>Optional</sup> <a name="user_tags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.userTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#user_tags CceNodePoolV3#user_tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putDataVolumes">put_data_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume">put_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTaints">put_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAgencyName">reset_agency_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerBaseSize">reset_docker_base_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerLvmConfigOverride">reset_docker_lvm_config_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetK8STags">reset_k8_s_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetKeyPair">reset_key_pair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxNodeCount">reset_max_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxPods">reset_max_pods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMinNodeCount">reset_min_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOs">reset_os</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPostinstall">reset_postinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPreinstall">reset_preinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleDownCooldownTime">reset_scale_down_cooldown_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleEnable">reset_scale_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetServerGroupReference">reset_server_group_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTaints">reset_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetUserTags">reset_user_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_data_volumes` <a name="put_data_volumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putDataVolumes"></a>

```python
def put_data_volumes(
  value: typing.Union[IResolvable, typing.List[CceNodePoolV3DataVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putDataVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>]]

---

##### `put_root_volume` <a name="put_root_volume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume"></a>

```python
def put_root_volume(
  size: typing.Union[int, float],
  volumetype: str,
  extend_param: str = None,
  extend_params: typing.Mapping[str] = None,
  kms_id: str = None
) -> None
```

###### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}.

---

###### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume.parameter.volumetype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}.

---

###### `extend_param`<sup>Optional</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume.parameter.extendParam"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}.

---

###### `extend_params`<sup>Optional</sup> <a name="extend_params" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume.parameter.extendParams"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}.

---

###### `kms_id`<sup>Optional</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume.parameter.kmsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}.

---

##### `put_taints` <a name="put_taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTaints"></a>

```python
def put_taints(
  value: typing.Union[IResolvable, typing.List[CceNodePoolV3Taints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTaints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#create CceNodePoolV3#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#default CceNodePoolV3#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#delete CceNodePoolV3#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#update CceNodePoolV3#update}.

---

##### `reset_agency_name` <a name="reset_agency_name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAgencyName"></a>

```python
def reset_agency_name() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_docker_base_size` <a name="reset_docker_base_size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerBaseSize"></a>

```python
def reset_docker_base_size() -> None
```

##### `reset_docker_lvm_config_override` <a name="reset_docker_lvm_config_override" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerLvmConfigOverride"></a>

```python
def reset_docker_lvm_config_override() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_k8_s_tags` <a name="reset_k8_s_tags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetK8STags"></a>

```python
def reset_k8_s_tags() -> None
```

##### `reset_key_pair` <a name="reset_key_pair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetKeyPair"></a>

```python
def reset_key_pair() -> None
```

##### `reset_max_node_count` <a name="reset_max_node_count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxNodeCount"></a>

```python
def reset_max_node_count() -> None
```

##### `reset_max_pods` <a name="reset_max_pods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxPods"></a>

```python
def reset_max_pods() -> None
```

##### `reset_min_node_count` <a name="reset_min_node_count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMinNodeCount"></a>

```python
def reset_min_node_count() -> None
```

##### `reset_os` <a name="reset_os" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOs"></a>

```python
def reset_os() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_postinstall` <a name="reset_postinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPostinstall"></a>

```python
def reset_postinstall() -> None
```

##### `reset_preinstall` <a name="reset_preinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPreinstall"></a>

```python
def reset_preinstall() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_scale_down_cooldown_time` <a name="reset_scale_down_cooldown_time" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleDownCooldownTime"></a>

```python
def reset_scale_down_cooldown_time() -> None
```

##### `reset_scale_enable` <a name="reset_scale_enable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleEnable"></a>

```python
def reset_scale_enable() -> None
```

##### `reset_server_group_reference` <a name="reset_server_group_reference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetServerGroupReference"></a>

```python
def reset_server_group_reference() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_taints` <a name="reset_taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTaints"></a>

```python
def reset_taints() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_tags` <a name="reset_user_tags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetUserTags"></a>

```python
def reset_user_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CceNodePoolV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CceNodePoolV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CceNodePoolV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CceNodePoolV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CceNodePoolV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumes">data_volumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList">CceNodePoolV3DataVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference">CceNodePoolV3RootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList">CceNodePoolV3TaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference">CceNodePoolV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.agencyNameInput">agency_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumesInput">data_volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSizeInput">docker_base_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverrideInput">docker_lvm_config_override_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavorInput">flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCountInput">initial_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STagsInput">k8_s_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPairInput">key_pair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPodsInput">max_pods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.osInput">os_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstallInput">postinstall_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstallInput">preinstall_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolumeInput">root_volume_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTimeInput">scale_down_cooldown_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnableInput">scale_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReferenceInput">server_group_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taintsInput">taints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTagsInput">user_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.agencyName">agency_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSize">docker_base_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverride">docker_lvm_config_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCount">initial_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STags">k8_s_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstall">postinstall</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstall">preinstall</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTime">scale_down_cooldown_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnable">scale_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReference">server_group_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTags">user_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_volumes`<sup>Required</sup> <a name="data_volumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumes"></a>

```python
data_volumes: CceNodePoolV3DataVolumesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList">CceNodePoolV3DataVolumesList</a>

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolume"></a>

```python
root_volume: CceNodePoolV3RootVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference">CceNodePoolV3RootVolumeOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taints"></a>

```python
taints: CceNodePoolV3TaintsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList">CceNodePoolV3TaintsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeouts"></a>

```python
timeouts: CceNodePoolV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference">CceNodePoolV3TimeoutsOutputReference</a>

---

##### `agency_name_input`<sup>Optional</sup> <a name="agency_name_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.agencyNameInput"></a>

```python
agency_name_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `data_volumes_input`<sup>Optional</sup> <a name="data_volumes_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumesInput"></a>

```python
data_volumes_input: typing.Union[IResolvable, typing.List[CceNodePoolV3DataVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>]]

---

##### `docker_base_size_input`<sup>Optional</sup> <a name="docker_base_size_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSizeInput"></a>

```python
docker_base_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `docker_lvm_config_override_input`<sup>Optional</sup> <a name="docker_lvm_config_override_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverrideInput"></a>

```python
docker_lvm_config_override_input: str
```

- *Type:* str

---

##### `flavor_input`<sup>Optional</sup> <a name="flavor_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavorInput"></a>

```python
flavor_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_node_count_input`<sup>Optional</sup> <a name="initial_node_count_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCountInput"></a>

```python
initial_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `k8_s_tags_input`<sup>Optional</sup> <a name="k8_s_tags_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STagsInput"></a>

```python
k8_s_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_pair_input`<sup>Optional</sup> <a name="key_pair_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPairInput"></a>

```python
key_pair_input: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pods_input`<sup>Optional</sup> <a name="max_pods_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPodsInput"></a>

```python
max_pods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_input`<sup>Optional</sup> <a name="os_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.osInput"></a>

```python
os_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `postinstall_input`<sup>Optional</sup> <a name="postinstall_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstallInput"></a>

```python
postinstall_input: str
```

- *Type:* str

---

##### `preinstall_input`<sup>Optional</sup> <a name="preinstall_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstallInput"></a>

```python
preinstall_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_volume_input`<sup>Optional</sup> <a name="root_volume_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolumeInput"></a>

```python
root_volume_input: CceNodePoolV3RootVolume
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `scale_down_cooldown_time_input`<sup>Optional</sup> <a name="scale_down_cooldown_time_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTimeInput"></a>

```python
scale_down_cooldown_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_enable_input`<sup>Optional</sup> <a name="scale_enable_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnableInput"></a>

```python
scale_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_group_reference_input`<sup>Optional</sup> <a name="server_group_reference_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReferenceInput"></a>

```python
server_group_reference_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `taints_input`<sup>Optional</sup> <a name="taints_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taintsInput"></a>

```python
taints_input: typing.Union[IResolvable, typing.List[CceNodePoolV3Taints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CceNodePoolV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>]

---

##### `user_tags_input`<sup>Optional</sup> <a name="user_tags_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTagsInput"></a>

```python
user_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `agency_name`<sup>Required</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.agencyName"></a>

```python
agency_name: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `docker_base_size`<sup>Required</sup> <a name="docker_base_size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSize"></a>

```python
docker_base_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `docker_lvm_config_override`<sup>Required</sup> <a name="docker_lvm_config_override" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverride"></a>

```python
docker_lvm_config_override: str
```

- *Type:* str

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_node_count`<sup>Required</sup> <a name="initial_node_count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCount"></a>

```python
initial_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `k8_s_tags`<sup>Required</sup> <a name="k8_s_tags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STags"></a>

```python
k8_s_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pods`<sup>Required</sup> <a name="max_pods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPods"></a>

```python
max_pods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `postinstall`<sup>Required</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstall"></a>

```python
postinstall: str
```

- *Type:* str

---

##### `preinstall`<sup>Required</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstall"></a>

```python
preinstall: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `scale_down_cooldown_time`<sup>Required</sup> <a name="scale_down_cooldown_time" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTime"></a>

```python
scale_down_cooldown_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_enable`<sup>Required</sup> <a name="scale_enable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnable"></a>

```python
scale_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_group_reference`<sup>Required</sup> <a name="server_group_reference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReference"></a>

```python
server_group_reference: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `user_tags`<sup>Required</sup> <a name="user_tags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTags"></a>

```python
user_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CceNodePoolV3Config <a name="CceNodePoolV3Config" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  data_volumes: typing.Union[IResolvable, typing.List[CceNodePoolV3DataVolumes]],
  flavor: str,
  initial_node_count: typing.Union[int, float],
  name: str,
  root_volume: CceNodePoolV3RootVolume,
  agency_name: str = None,
  availability_zone: str = None,
  docker_base_size: typing.Union[int, float] = None,
  docker_lvm_config_override: str = None,
  id: str = None,
  k8_s_tags: typing.Mapping[str] = None,
  key_pair: str = None,
  max_node_count: typing.Union[int, float] = None,
  max_pods: typing.Union[int, float] = None,
  min_node_count: typing.Union[int, float] = None,
  os: str = None,
  password: str = None,
  postinstall: str = None,
  preinstall: str = None,
  priority: typing.Union[int, float] = None,
  runtime: str = None,
  scale_down_cooldown_time: typing.Union[int, float] = None,
  scale_enable: typing.Union[bool, IResolvable] = None,
  server_group_reference: str = None,
  subnet_id: str = None,
  taints: typing.Union[IResolvable, typing.List[CceNodePoolV3Taints]] = None,
  timeouts: CceNodePoolV3Timeouts = None,
  user_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#cluster_id CceNodePoolV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dataVolumes">data_volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>]]</code> | data_volumes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.flavor">flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#flavor CceNodePoolV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.initialNodeCount">initial_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#initial_node_count CceNodePoolV3#initial_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#name CceNodePoolV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.agencyName">agency_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#agency_name CceNodePoolV3#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#availability_zone CceNodePoolV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerBaseSize">docker_base_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#docker_base_size CceNodePoolV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerLvmConfigOverride">docker_lvm_config_override</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#id CceNodePoolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.k8STags">k8_s_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#k8s_tags CceNodePoolV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#key_pair CceNodePoolV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#max_node_count CceNodePoolV3#max_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#max_pods CceNodePoolV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#min_node_count CceNodePoolV3#min_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#os CceNodePoolV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#password CceNodePoolV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.postinstall">postinstall</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#postinstall CceNodePoolV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.preinstall">preinstall</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#preinstall CceNodePoolV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#priority CceNodePoolV3#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#runtime CceNodePoolV3#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleDownCooldownTime">scale_down_cooldown_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleEnable">scale_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#scale_enable CceNodePoolV3#scale_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.serverGroupReference">server_group_reference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#server_group_reference CceNodePoolV3#server_group_reference}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#subnet_id CceNodePoolV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>]]</code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.userTags">user_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#user_tags CceNodePoolV3#user_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#cluster_id CceNodePoolV3#cluster_id}.

---

##### `data_volumes`<sup>Required</sup> <a name="data_volumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dataVolumes"></a>

```python
data_volumes: typing.Union[IResolvable, typing.List[CceNodePoolV3DataVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>]]

data_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#data_volumes CceNodePoolV3#data_volumes}

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#flavor CceNodePoolV3#flavor}.

---

##### `initial_node_count`<sup>Required</sup> <a name="initial_node_count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.initialNodeCount"></a>

```python
initial_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#initial_node_count CceNodePoolV3#initial_node_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#name CceNodePoolV3#name}.

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.rootVolume"></a>

```python
root_volume: CceNodePoolV3RootVolume
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#root_volume CceNodePoolV3#root_volume}

---

##### `agency_name`<sup>Optional</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.agencyName"></a>

```python
agency_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#agency_name CceNodePoolV3#agency_name}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#availability_zone CceNodePoolV3#availability_zone}.

---

##### `docker_base_size`<sup>Optional</sup> <a name="docker_base_size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerBaseSize"></a>

```python
docker_base_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#docker_base_size CceNodePoolV3#docker_base_size}.

---

##### `docker_lvm_config_override`<sup>Optional</sup> <a name="docker_lvm_config_override" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerLvmConfigOverride"></a>

```python
docker_lvm_config_override: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#id CceNodePoolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `k8_s_tags`<sup>Optional</sup> <a name="k8_s_tags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.k8STags"></a>

```python
k8_s_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#k8s_tags CceNodePoolV3#k8s_tags}.

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#key_pair CceNodePoolV3#key_pair}.

---

##### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#max_node_count CceNodePoolV3#max_node_count}.

---

##### `max_pods`<sup>Optional</sup> <a name="max_pods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxPods"></a>

```python
max_pods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#max_pods CceNodePoolV3#max_pods}.

---

##### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#min_node_count CceNodePoolV3#min_node_count}.

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.os"></a>

```python
os: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#os CceNodePoolV3#os}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#password CceNodePoolV3#password}.

---

##### `postinstall`<sup>Optional</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.postinstall"></a>

```python
postinstall: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#postinstall CceNodePoolV3#postinstall}.

---

##### `preinstall`<sup>Optional</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.preinstall"></a>

```python
preinstall: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#preinstall CceNodePoolV3#preinstall}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#priority CceNodePoolV3#priority}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#runtime CceNodePoolV3#runtime}.

---

##### `scale_down_cooldown_time`<sup>Optional</sup> <a name="scale_down_cooldown_time" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleDownCooldownTime"></a>

```python
scale_down_cooldown_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}.

---

##### `scale_enable`<sup>Optional</sup> <a name="scale_enable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleEnable"></a>

```python
scale_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#scale_enable CceNodePoolV3#scale_enable}.

---

##### `server_group_reference`<sup>Optional</sup> <a name="server_group_reference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.serverGroupReference"></a>

```python
server_group_reference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#server_group_reference CceNodePoolV3#server_group_reference}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#subnet_id CceNodePoolV3#subnet_id}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.taints"></a>

```python
taints: typing.Union[IResolvable, typing.List[CceNodePoolV3Taints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#taints CceNodePoolV3#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.timeouts"></a>

```python
timeouts: CceNodePoolV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#timeouts CceNodePoolV3#timeouts}

---

##### `user_tags`<sup>Optional</sup> <a name="user_tags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.userTags"></a>

```python
user_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#user_tags CceNodePoolV3#user_tags}.

---

### CceNodePoolV3DataVolumes <a name="CceNodePoolV3DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3DataVolumes(
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
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.volumetype">volumetype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParam">extend_param</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParams">extend_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.kmsId">kms_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}.

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.volumetype"></a>

```python
volumetype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}.

---

##### `extend_param`<sup>Optional</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParam"></a>

```python
extend_param: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}.

---

##### `extend_params`<sup>Optional</sup> <a name="extend_params" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParams"></a>

```python
extend_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}.

---

##### `kms_id`<sup>Optional</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.kmsId"></a>

```python
kms_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}.

---

### CceNodePoolV3RootVolume <a name="CceNodePoolV3RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3RootVolume(
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
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.volumetype">volumetype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParam">extend_param</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParams">extend_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.kmsId">kms_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}.

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.volumetype"></a>

```python
volumetype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}.

---

##### `extend_param`<sup>Optional</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParam"></a>

```python
extend_param: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}.

---

##### `extend_params`<sup>Optional</sup> <a name="extend_params" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParams"></a>

```python
extend_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}.

---

##### `kms_id`<sup>Optional</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.kmsId"></a>

```python
kms_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}.

---

### CceNodePoolV3Taints <a name="CceNodePoolV3Taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3Taints(
  effect: str,
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#effect CceNodePoolV3#effect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#key CceNodePoolV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#value CceNodePoolV3#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#effect CceNodePoolV3#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#key CceNodePoolV3#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#value CceNodePoolV3#value}.

---

### CceNodePoolV3Timeouts <a name="CceNodePoolV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3Timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#create CceNodePoolV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#default CceNodePoolV3#default}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#delete CceNodePoolV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#update CceNodePoolV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#create CceNodePoolV3#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#default CceNodePoolV3#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#delete CceNodePoolV3#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/cce_node_pool_v3#update CceNodePoolV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceNodePoolV3DataVolumesList <a name="CceNodePoolV3DataVolumesList" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3DataVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceNodePoolV3DataVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CceNodePoolV3DataVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>]]

---


### CceNodePoolV3DataVolumesOutputReference <a name="CceNodePoolV3DataVolumesOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParam">reset_extend_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParams">reset_extend_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetKmsId">reset_kms_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_extend_param` <a name="reset_extend_param" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParam"></a>

```python
def reset_extend_param() -> None
```

##### `reset_extend_params` <a name="reset_extend_params" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParams"></a>

```python
def reset_extend_params() -> None
```

##### `reset_kms_id` <a name="reset_kms_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetKmsId"></a>

```python
def reset_kms_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamInput">extend_param_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamsInput">extend_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsIdInput">kms_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetypeInput">volumetype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParam">extend_param</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParams">extend_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsId">kms_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetype">volumetype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extend_param_input`<sup>Optional</sup> <a name="extend_param_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamInput"></a>

```python
extend_param_input: str
```

- *Type:* str

---

##### `extend_params_input`<sup>Optional</sup> <a name="extend_params_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamsInput"></a>

```python
extend_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_id_input`<sup>Optional</sup> <a name="kms_id_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsIdInput"></a>

```python
kms_id_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumetype_input`<sup>Optional</sup> <a name="volumetype_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetypeInput"></a>

```python
volumetype_input: str
```

- *Type:* str

---

##### `extend_param`<sup>Required</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParam"></a>

```python
extend_param: str
```

- *Type:* str

---

##### `extend_params`<sup>Required</sup> <a name="extend_params" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParams"></a>

```python
extend_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_id`<sup>Required</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsId"></a>

```python
kms_id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetype"></a>

```python
volumetype: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceNodePoolV3DataVolumes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>]

---


### CceNodePoolV3RootVolumeOutputReference <a name="CceNodePoolV3RootVolumeOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParam">reset_extend_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParams">reset_extend_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetKmsId">reset_kms_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_extend_param` <a name="reset_extend_param" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParam"></a>

```python
def reset_extend_param() -> None
```

##### `reset_extend_params` <a name="reset_extend_params" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParams"></a>

```python
def reset_extend_params() -> None
```

##### `reset_kms_id` <a name="reset_kms_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetKmsId"></a>

```python
def reset_kms_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamInput">extend_param_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamsInput">extend_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsIdInput">kms_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetypeInput">volumetype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParam">extend_param</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParams">extend_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsId">kms_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetype">volumetype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extend_param_input`<sup>Optional</sup> <a name="extend_param_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamInput"></a>

```python
extend_param_input: str
```

- *Type:* str

---

##### `extend_params_input`<sup>Optional</sup> <a name="extend_params_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamsInput"></a>

```python
extend_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_id_input`<sup>Optional</sup> <a name="kms_id_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsIdInput"></a>

```python
kms_id_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumetype_input`<sup>Optional</sup> <a name="volumetype_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetypeInput"></a>

```python
volumetype_input: str
```

- *Type:* str

---

##### `extend_param`<sup>Required</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParam"></a>

```python
extend_param: str
```

- *Type:* str

---

##### `extend_params`<sup>Required</sup> <a name="extend_params" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParams"></a>

```python
extend_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_id`<sup>Required</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsId"></a>

```python
kms_id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetype"></a>

```python
volumetype: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.internalValue"></a>

```python
internal_value: CceNodePoolV3RootVolume
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

---


### CceNodePoolV3TaintsList <a name="CceNodePoolV3TaintsList" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3TaintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceNodePoolV3TaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CceNodePoolV3Taints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>]]

---


### CceNodePoolV3TaintsOutputReference <a name="CceNodePoolV3TaintsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3TaintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceNodePoolV3Taints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>]

---


### CceNodePoolV3TimeoutsOutputReference <a name="CceNodePoolV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_pool_v3

cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceNodePoolV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>]

---



