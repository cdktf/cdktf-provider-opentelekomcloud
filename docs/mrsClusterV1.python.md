# `mrsClusterV1` Submodule <a name="`mrsClusterV1` Submodule" id="@cdktf/provider-opentelekomcloud.mrsClusterV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MrsClusterV1 <a name="MrsClusterV1" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1 opentelekomcloud_mrs_cluster_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  available_zone_id: str,
  billing_type: typing.Union[int, float],
  cluster_name: str,
  cluster_version: str,
  component_list: IResolvable | typing.List[MrsClusterV1ComponentListStruct],
  core_node_num: typing.Union[int, float],
  core_node_size: str,
  master_node_num: typing.Union[int, float],
  master_node_size: str,
  node_public_cert_name: str,
  safe_mode: typing.Union[int, float],
  subnet_id: str,
  vpc_id: str,
  add_jobs: IResolvable | typing.List[MrsClusterV1AddJobs] = None,
  bootstrap_scripts: IResolvable | typing.List[MrsClusterV1BootstrapScripts] = None,
  cluster_admin_secret: str = None,
  cluster_type: typing.Union[int, float] = None,
  core_data_volume_count: typing.Union[int, float] = None,
  core_data_volume_size: typing.Union[int, float] = None,
  core_data_volume_type: str = None,
  id: str = None,
  log_collection: typing.Union[int, float] = None,
  master_data_volume_count: typing.Union[int, float] = None,
  master_data_volume_size: typing.Union[int, float] = None,
  master_data_volume_type: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MrsClusterV1Timeouts = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.availableZoneId">available_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.billingType">billing_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.componentList">component_list</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>]</code> | component_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreNodeNum">core_node_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreNodeSize">core_node_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterNodeNum">master_node_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterNodeSize">master_node_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.nodePublicCertName">node_public_cert_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.safeMode">safe_mode</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.addJobs">add_jobs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>]</code> | add_jobs block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.bootstrapScripts">bootstrap_scripts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>]</code> | bootstrap_scripts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterAdminSecret">cluster_admin_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterType">cluster_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreDataVolumeCount">core_data_volume_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreDataVolumeSize">core_data_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreDataVolumeType">core_data_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#id MrsClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.logCollection">log_collection</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterDataVolumeCount">master_data_volume_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterDataVolumeSize">master_data_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterDataVolumeType">master_data_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#region MrsClusterV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#tags MrsClusterV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `available_zone_id`<sup>Required</sup> <a name="available_zone_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.availableZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}.

---

##### `billing_type`<sup>Required</sup> <a name="billing_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.billingType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}.

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}.

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}.

---

##### `component_list`<sup>Required</sup> <a name="component_list" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.componentList"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>]

component_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#component_list MrsClusterV1#component_list}

---

##### `core_node_num`<sup>Required</sup> <a name="core_node_num" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreNodeNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}.

---

##### `core_node_size`<sup>Required</sup> <a name="core_node_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreNodeSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}.

---

##### `master_node_num`<sup>Required</sup> <a name="master_node_num" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterNodeNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}.

---

##### `master_node_size`<sup>Required</sup> <a name="master_node_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterNodeSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}.

---

##### `node_public_cert_name`<sup>Required</sup> <a name="node_public_cert_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.nodePublicCertName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}.

---

##### `safe_mode`<sup>Required</sup> <a name="safe_mode" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.safeMode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}.

---

##### `add_jobs`<sup>Optional</sup> <a name="add_jobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.addJobs"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>]

add_jobs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#add_jobs MrsClusterV1#add_jobs}

---

##### `bootstrap_scripts`<sup>Optional</sup> <a name="bootstrap_scripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.bootstrapScripts"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>]

bootstrap_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#bootstrap_scripts MrsClusterV1#bootstrap_scripts}

---

##### `cluster_admin_secret`<sup>Optional</sup> <a name="cluster_admin_secret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterAdminSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}.

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}.

---

##### `core_data_volume_count`<sup>Optional</sup> <a name="core_data_volume_count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreDataVolumeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}.

---

##### `core_data_volume_size`<sup>Optional</sup> <a name="core_data_volume_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreDataVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}.

---

##### `core_data_volume_type`<sup>Optional</sup> <a name="core_data_volume_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreDataVolumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#id MrsClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_collection`<sup>Optional</sup> <a name="log_collection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.logCollection"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}.

---

##### `master_data_volume_count`<sup>Optional</sup> <a name="master_data_volume_count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterDataVolumeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}.

---

##### `master_data_volume_size`<sup>Optional</sup> <a name="master_data_volume_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterDataVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}.

---

##### `master_data_volume_type`<sup>Optional</sup> <a name="master_data_volume_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterDataVolumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#region MrsClusterV1#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#tags MrsClusterV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#timeouts MrsClusterV1#timeouts}

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs">put_add_jobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts">put_bootstrap_scripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList">put_component_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetAddJobs">reset_add_jobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetBootstrapScripts">reset_bootstrap_scripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterAdminSecret">reset_cluster_admin_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterType">reset_cluster_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeCount">reset_core_data_volume_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeSize">reset_core_data_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeType">reset_core_data_volume_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetLogCollection">reset_log_collection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeCount">reset_master_data_volume_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeSize">reset_master_data_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeType">reset_master_data_volume_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_add_jobs` <a name="put_add_jobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs"></a>

```python
def put_add_jobs(
  value: IResolvable | typing.List[MrsClusterV1AddJobs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>]

---

##### `put_bootstrap_scripts` <a name="put_bootstrap_scripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts"></a>

```python
def put_bootstrap_scripts(
  value: IResolvable | typing.List[MrsClusterV1BootstrapScripts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>]

---

##### `put_component_list` <a name="put_component_list" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList"></a>

```python
def put_component_list(
  value: IResolvable | typing.List[MrsClusterV1ComponentListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#create MrsClusterV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#delete MrsClusterV1#delete}.

---

##### `reset_add_jobs` <a name="reset_add_jobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetAddJobs"></a>

```python
def reset_add_jobs() -> None
```

##### `reset_bootstrap_scripts` <a name="reset_bootstrap_scripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetBootstrapScripts"></a>

```python
def reset_bootstrap_scripts() -> None
```

##### `reset_cluster_admin_secret` <a name="reset_cluster_admin_secret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterAdminSecret"></a>

```python
def reset_cluster_admin_secret() -> None
```

##### `reset_cluster_type` <a name="reset_cluster_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterType"></a>

```python
def reset_cluster_type() -> None
```

##### `reset_core_data_volume_count` <a name="reset_core_data_volume_count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeCount"></a>

```python
def reset_core_data_volume_count() -> None
```

##### `reset_core_data_volume_size` <a name="reset_core_data_volume_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeSize"></a>

```python
def reset_core_data_volume_size() -> None
```

##### `reset_core_data_volume_type` <a name="reset_core_data_volume_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeType"></a>

```python
def reset_core_data_volume_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_collection` <a name="reset_log_collection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetLogCollection"></a>

```python
def reset_log_collection() -> None
```

##### `reset_master_data_volume_count` <a name="reset_master_data_volume_count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeCount"></a>

```python
def reset_master_data_volume_count() -> None
```

##### `reset_master_data_volume_size` <a name="reset_master_data_volume_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeSize"></a>

```python
def reset_master_data_volume_size() -> None
```

##### `reset_master_data_volume_type` <a name="reset_master_data_volume_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeType"></a>

```python
def reset_master_data_volume_type() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MrsClusterV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MrsClusterV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MrsClusterV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MrsClusterV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MrsClusterV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobs">add_jobs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList">MrsClusterV1AddJobsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneName">available_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScripts">bootstrap_scripts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList">MrsClusterV1BootstrapScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.chargingStartTime">charging_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterState">cluster_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentList">component_list</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList">MrsClusterV1ComponentListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeProductId">core_node_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSpecId">core_node_spec_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.createAt">create_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.errorInfo">error_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalAlternateIp">external_alternate_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalIp">external_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fee">fee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.hadoopVersion">hadoop_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.internalIp">internal_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeIp">master_node_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeProductId">master_node_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSpecId">master_node_spec_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.orderId">order_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.privateIpFirst">private_ip_first</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.remark">remark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.securityGroupsId">security_groups_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.slaveSecurityGroupsId">slave_security_groups_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference">MrsClusterV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.updateAt">update_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vnc">vnc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobsInput">add_jobs_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneIdInput">available_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingTypeInput">billing_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScriptsInput">bootstrap_scripts_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecretInput">cluster_admin_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterTypeInput">cluster_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentListInput">component_list_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCountInput">core_data_volume_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSizeInput">core_data_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeTypeInput">core_data_volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNumInput">core_node_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSizeInput">core_node_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollectionInput">log_collection_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCountInput">master_data_volume_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSizeInput">master_data_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeTypeInput">master_data_volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNumInput">master_node_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSizeInput">master_node_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertNameInput">node_public_cert_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeModeInput">safe_mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneId">available_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingType">billing_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecret">cluster_admin_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterType">cluster_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCount">core_data_volume_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSize">core_data_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeType">core_data_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNum">core_node_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSize">core_node_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollection">log_collection</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCount">master_data_volume_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSize">master_data_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeType">master_data_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNum">master_node_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSize">master_node_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertName">node_public_cert_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeMode">safe_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `add_jobs`<sup>Required</sup> <a name="add_jobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobs"></a>

```python
add_jobs: MrsClusterV1AddJobsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList">MrsClusterV1AddJobsList</a>

---

##### `available_zone_name`<sup>Required</sup> <a name="available_zone_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneName"></a>

```python
available_zone_name: str
```

- *Type:* str

---

##### `bootstrap_scripts`<sup>Required</sup> <a name="bootstrap_scripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScripts"></a>

```python
bootstrap_scripts: MrsClusterV1BootstrapScriptsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList">MrsClusterV1BootstrapScriptsList</a>

---

##### `charging_start_time`<sup>Required</sup> <a name="charging_start_time" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.chargingStartTime"></a>

```python
charging_start_time: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cluster_state`<sup>Required</sup> <a name="cluster_state" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterState"></a>

```python
cluster_state: str
```

- *Type:* str

---

##### `component_list`<sup>Required</sup> <a name="component_list" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentList"></a>

```python
component_list: MrsClusterV1ComponentListStructList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList">MrsClusterV1ComponentListStructList</a>

---

##### `core_node_product_id`<sup>Required</sup> <a name="core_node_product_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeProductId"></a>

```python
core_node_product_id: str
```

- *Type:* str

---

##### `core_node_spec_id`<sup>Required</sup> <a name="core_node_spec_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSpecId"></a>

```python
core_node_spec_id: str
```

- *Type:* str

---

##### `create_at`<sup>Required</sup> <a name="create_at" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.createAt"></a>

```python
create_at: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `error_info`<sup>Required</sup> <a name="error_info" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.errorInfo"></a>

```python
error_info: str
```

- *Type:* str

---

##### `external_alternate_ip`<sup>Required</sup> <a name="external_alternate_ip" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalAlternateIp"></a>

```python
external_alternate_ip: str
```

- *Type:* str

---

##### `external_ip`<sup>Required</sup> <a name="external_ip" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalIp"></a>

```python
external_ip: str
```

- *Type:* str

---

##### `fee`<sup>Required</sup> <a name="fee" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fee"></a>

```python
fee: str
```

- *Type:* str

---

##### `hadoop_version`<sup>Required</sup> <a name="hadoop_version" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.hadoopVersion"></a>

```python
hadoop_version: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `internal_ip`<sup>Required</sup> <a name="internal_ip" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.internalIp"></a>

```python
internal_ip: str
```

- *Type:* str

---

##### `master_node_ip`<sup>Required</sup> <a name="master_node_ip" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeIp"></a>

```python
master_node_ip: str
```

- *Type:* str

---

##### `master_node_product_id`<sup>Required</sup> <a name="master_node_product_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeProductId"></a>

```python
master_node_product_id: str
```

- *Type:* str

---

##### `master_node_spec_id`<sup>Required</sup> <a name="master_node_spec_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSpecId"></a>

```python
master_node_spec_id: str
```

- *Type:* str

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.orderId"></a>

```python
order_id: str
```

- *Type:* str

---

##### `private_ip_first`<sup>Required</sup> <a name="private_ip_first" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.privateIpFirst"></a>

```python
private_ip_first: str
```

- *Type:* str

---

##### `remark`<sup>Required</sup> <a name="remark" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.remark"></a>

```python
remark: str
```

- *Type:* str

---

##### `security_groups_id`<sup>Required</sup> <a name="security_groups_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.securityGroupsId"></a>

```python
security_groups_id: str
```

- *Type:* str

---

##### `slave_security_groups_id`<sup>Required</sup> <a name="slave_security_groups_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.slaveSecurityGroupsId"></a>

```python
slave_security_groups_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeouts"></a>

```python
timeouts: MrsClusterV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference">MrsClusterV1TimeoutsOutputReference</a>

---

##### `update_at`<sup>Required</sup> <a name="update_at" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.updateAt"></a>

```python
update_at: str
```

- *Type:* str

---

##### `vnc`<sup>Required</sup> <a name="vnc" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vnc"></a>

```python
vnc: str
```

- *Type:* str

---

##### `add_jobs_input`<sup>Optional</sup> <a name="add_jobs_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobsInput"></a>

```python
add_jobs_input: IResolvable | typing.List[MrsClusterV1AddJobs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>]

---

##### `available_zone_id_input`<sup>Optional</sup> <a name="available_zone_id_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneIdInput"></a>

```python
available_zone_id_input: str
```

- *Type:* str

---

##### `billing_type_input`<sup>Optional</sup> <a name="billing_type_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingTypeInput"></a>

```python
billing_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bootstrap_scripts_input`<sup>Optional</sup> <a name="bootstrap_scripts_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScriptsInput"></a>

```python
bootstrap_scripts_input: IResolvable | typing.List[MrsClusterV1BootstrapScripts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>]

---

##### `cluster_admin_secret_input`<sup>Optional</sup> <a name="cluster_admin_secret_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecretInput"></a>

```python
cluster_admin_secret_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `cluster_type_input`<sup>Optional</sup> <a name="cluster_type_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterTypeInput"></a>

```python
cluster_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_version_input`<sup>Optional</sup> <a name="cluster_version_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersionInput"></a>

```python
cluster_version_input: str
```

- *Type:* str

---

##### `component_list_input`<sup>Optional</sup> <a name="component_list_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentListInput"></a>

```python
component_list_input: IResolvable | typing.List[MrsClusterV1ComponentListStruct]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>]

---

##### `core_data_volume_count_input`<sup>Optional</sup> <a name="core_data_volume_count_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCountInput"></a>

```python
core_data_volume_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_data_volume_size_input`<sup>Optional</sup> <a name="core_data_volume_size_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSizeInput"></a>

```python
core_data_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_data_volume_type_input`<sup>Optional</sup> <a name="core_data_volume_type_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeTypeInput"></a>

```python
core_data_volume_type_input: str
```

- *Type:* str

---

##### `core_node_num_input`<sup>Optional</sup> <a name="core_node_num_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNumInput"></a>

```python
core_node_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_node_size_input`<sup>Optional</sup> <a name="core_node_size_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSizeInput"></a>

```python
core_node_size_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_collection_input`<sup>Optional</sup> <a name="log_collection_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollectionInput"></a>

```python
log_collection_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_data_volume_count_input`<sup>Optional</sup> <a name="master_data_volume_count_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCountInput"></a>

```python
master_data_volume_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_data_volume_size_input`<sup>Optional</sup> <a name="master_data_volume_size_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSizeInput"></a>

```python
master_data_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_data_volume_type_input`<sup>Optional</sup> <a name="master_data_volume_type_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeTypeInput"></a>

```python
master_data_volume_type_input: str
```

- *Type:* str

---

##### `master_node_num_input`<sup>Optional</sup> <a name="master_node_num_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNumInput"></a>

```python
master_node_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_size_input`<sup>Optional</sup> <a name="master_node_size_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSizeInput"></a>

```python
master_node_size_input: str
```

- *Type:* str

---

##### `node_public_cert_name_input`<sup>Optional</sup> <a name="node_public_cert_name_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertNameInput"></a>

```python
node_public_cert_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `safe_mode_input`<sup>Optional</sup> <a name="safe_mode_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeModeInput"></a>

```python
safe_mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | MrsClusterV1Timeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `available_zone_id`<sup>Required</sup> <a name="available_zone_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneId"></a>

```python
available_zone_id: str
```

- *Type:* str

---

##### `billing_type`<sup>Required</sup> <a name="billing_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingType"></a>

```python
billing_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_admin_secret`<sup>Required</sup> <a name="cluster_admin_secret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecret"></a>

```python
cluster_admin_secret: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterType"></a>

```python
cluster_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `core_data_volume_count`<sup>Required</sup> <a name="core_data_volume_count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCount"></a>

```python
core_data_volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_data_volume_size`<sup>Required</sup> <a name="core_data_volume_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSize"></a>

```python
core_data_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_data_volume_type`<sup>Required</sup> <a name="core_data_volume_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeType"></a>

```python
core_data_volume_type: str
```

- *Type:* str

---

##### `core_node_num`<sup>Required</sup> <a name="core_node_num" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNum"></a>

```python
core_node_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `core_node_size`<sup>Required</sup> <a name="core_node_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSize"></a>

```python
core_node_size: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_collection`<sup>Required</sup> <a name="log_collection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollection"></a>

```python
log_collection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_data_volume_count`<sup>Required</sup> <a name="master_data_volume_count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCount"></a>

```python
master_data_volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_data_volume_size`<sup>Required</sup> <a name="master_data_volume_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSize"></a>

```python
master_data_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_data_volume_type`<sup>Required</sup> <a name="master_data_volume_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeType"></a>

```python
master_data_volume_type: str
```

- *Type:* str

---

##### `master_node_num`<sup>Required</sup> <a name="master_node_num" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNum"></a>

```python
master_node_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_size`<sup>Required</sup> <a name="master_node_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSize"></a>

```python
master_node_size: str
```

- *Type:* str

---

##### `node_public_cert_name`<sup>Required</sup> <a name="node_public_cert_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertName"></a>

```python
node_public_cert_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `safe_mode`<sup>Required</sup> <a name="safe_mode" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeMode"></a>

```python
safe_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MrsClusterV1AddJobs <a name="MrsClusterV1AddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1AddJobs(
  jar_path: str,
  job_name: str,
  job_type: typing.Union[int, float],
  submit_job_once_cluster_run: bool | IResolvable,
  arguments: str = None,
  file_action: str = None,
  hive_script_path: str = None,
  hql: str = None,
  input: str = None,
  job_log: str = None,
  output: str = None,
  shutdown_cluster: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jarPath">jar_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#jar_path MrsClusterV1#jar_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobName">job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#job_name MrsClusterV1#job_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobType">job_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#job_type MrsClusterV1#job_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.submitJobOnceClusterRun">submit_job_once_cluster_run</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#submit_job_once_cluster_run MrsClusterV1#submit_job_once_cluster_run}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.arguments">arguments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#arguments MrsClusterV1#arguments}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.fileAction">file_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#file_action MrsClusterV1#file_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hiveScriptPath">hive_script_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#hive_script_path MrsClusterV1#hive_script_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hql">hql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#hql MrsClusterV1#hql}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#input MrsClusterV1#input}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobLog">job_log</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#job_log MrsClusterV1#job_log}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.output">output</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#output MrsClusterV1#output}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.shutdownCluster">shutdown_cluster</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#shutdown_cluster MrsClusterV1#shutdown_cluster}. |

---

##### `jar_path`<sup>Required</sup> <a name="jar_path" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jarPath"></a>

```python
jar_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#jar_path MrsClusterV1#jar_path}.

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#job_name MrsClusterV1#job_name}.

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobType"></a>

```python
job_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#job_type MrsClusterV1#job_type}.

---

##### `submit_job_once_cluster_run`<sup>Required</sup> <a name="submit_job_once_cluster_run" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.submitJobOnceClusterRun"></a>

```python
submit_job_once_cluster_run: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#submit_job_once_cluster_run MrsClusterV1#submit_job_once_cluster_run}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.arguments"></a>

```python
arguments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#arguments MrsClusterV1#arguments}.

---

##### `file_action`<sup>Optional</sup> <a name="file_action" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.fileAction"></a>

```python
file_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#file_action MrsClusterV1#file_action}.

---

##### `hive_script_path`<sup>Optional</sup> <a name="hive_script_path" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hiveScriptPath"></a>

```python
hive_script_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#hive_script_path MrsClusterV1#hive_script_path}.

---

##### `hql`<sup>Optional</sup> <a name="hql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hql"></a>

```python
hql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#hql MrsClusterV1#hql}.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.input"></a>

```python
input: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#input MrsClusterV1#input}.

---

##### `job_log`<sup>Optional</sup> <a name="job_log" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobLog"></a>

```python
job_log: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#job_log MrsClusterV1#job_log}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.output"></a>

```python
output: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#output MrsClusterV1#output}.

---

##### `shutdown_cluster`<sup>Optional</sup> <a name="shutdown_cluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.shutdownCluster"></a>

```python
shutdown_cluster: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#shutdown_cluster MrsClusterV1#shutdown_cluster}.

---

### MrsClusterV1BootstrapScripts <a name="MrsClusterV1BootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1BootstrapScripts(
  fail_action: str,
  name: str,
  nodes: typing.List[str],
  uri: str,
  active_master: bool | IResolvable = None,
  before_component_start: bool | IResolvable = None,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.failAction">fail_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#fail_action MrsClusterV1#fail_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#name MrsClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.nodes">nodes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#nodes MrsClusterV1#nodes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#uri MrsClusterV1#uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.activeMaster">active_master</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#active_master MrsClusterV1#active_master}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.beforeComponentStart">before_component_start</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#before_component_start MrsClusterV1#before_component_start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#parameters MrsClusterV1#parameters}. |

---

##### `fail_action`<sup>Required</sup> <a name="fail_action" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.failAction"></a>

```python
fail_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#fail_action MrsClusterV1#fail_action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#name MrsClusterV1#name}.

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.nodes"></a>

```python
nodes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#nodes MrsClusterV1#nodes}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#uri MrsClusterV1#uri}.

---

##### `active_master`<sup>Optional</sup> <a name="active_master" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.activeMaster"></a>

```python
active_master: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#active_master MrsClusterV1#active_master}.

---

##### `before_component_start`<sup>Optional</sup> <a name="before_component_start" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.beforeComponentStart"></a>

```python
before_component_start: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#before_component_start MrsClusterV1#before_component_start}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#parameters MrsClusterV1#parameters}.

---

### MrsClusterV1ComponentListStruct <a name="MrsClusterV1ComponentListStruct" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1ComponentListStruct(
  component_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct.property.componentName">component_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#component_name MrsClusterV1#component_name}. |

---

##### `component_name`<sup>Required</sup> <a name="component_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct.property.componentName"></a>

```python
component_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#component_name MrsClusterV1#component_name}.

---

### MrsClusterV1Config <a name="MrsClusterV1Config" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  available_zone_id: str,
  billing_type: typing.Union[int, float],
  cluster_name: str,
  cluster_version: str,
  component_list: IResolvable | typing.List[MrsClusterV1ComponentListStruct],
  core_node_num: typing.Union[int, float],
  core_node_size: str,
  master_node_num: typing.Union[int, float],
  master_node_size: str,
  node_public_cert_name: str,
  safe_mode: typing.Union[int, float],
  subnet_id: str,
  vpc_id: str,
  add_jobs: IResolvable | typing.List[MrsClusterV1AddJobs] = None,
  bootstrap_scripts: IResolvable | typing.List[MrsClusterV1BootstrapScripts] = None,
  cluster_admin_secret: str = None,
  cluster_type: typing.Union[int, float] = None,
  core_data_volume_count: typing.Union[int, float] = None,
  core_data_volume_size: typing.Union[int, float] = None,
  core_data_volume_type: str = None,
  id: str = None,
  log_collection: typing.Union[int, float] = None,
  master_data_volume_count: typing.Union[int, float] = None,
  master_data_volume_size: typing.Union[int, float] = None,
  master_data_volume_type: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MrsClusterV1Timeouts = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.availableZoneId">available_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.billingType">billing_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.componentList">component_list</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>]</code> | component_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeNum">core_node_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeSize">core_node_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeNum">master_node_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeSize">master_node_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.nodePublicCertName">node_public_cert_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.safeMode">safe_mode</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.addJobs">add_jobs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>]</code> | add_jobs block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.bootstrapScripts">bootstrap_scripts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>]</code> | bootstrap_scripts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterAdminSecret">cluster_admin_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterType">cluster_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeCount">core_data_volume_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeSize">core_data_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeType">core_data_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#id MrsClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.logCollection">log_collection</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeCount">master_data_volume_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeSize">master_data_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeType">master_data_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#region MrsClusterV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#tags MrsClusterV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `available_zone_id`<sup>Required</sup> <a name="available_zone_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.availableZoneId"></a>

```python
available_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}.

---

##### `billing_type`<sup>Required</sup> <a name="billing_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.billingType"></a>

```python
billing_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}.

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}.

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}.

---

##### `component_list`<sup>Required</sup> <a name="component_list" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.componentList"></a>

```python
component_list: IResolvable | typing.List[MrsClusterV1ComponentListStruct]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>]

component_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#component_list MrsClusterV1#component_list}

---

##### `core_node_num`<sup>Required</sup> <a name="core_node_num" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeNum"></a>

```python
core_node_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}.

---

##### `core_node_size`<sup>Required</sup> <a name="core_node_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeSize"></a>

```python
core_node_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}.

---

##### `master_node_num`<sup>Required</sup> <a name="master_node_num" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeNum"></a>

```python
master_node_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}.

---

##### `master_node_size`<sup>Required</sup> <a name="master_node_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeSize"></a>

```python
master_node_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}.

---

##### `node_public_cert_name`<sup>Required</sup> <a name="node_public_cert_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.nodePublicCertName"></a>

```python
node_public_cert_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}.

---

##### `safe_mode`<sup>Required</sup> <a name="safe_mode" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.safeMode"></a>

```python
safe_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}.

---

##### `add_jobs`<sup>Optional</sup> <a name="add_jobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.addJobs"></a>

```python
add_jobs: IResolvable | typing.List[MrsClusterV1AddJobs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>]

add_jobs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#add_jobs MrsClusterV1#add_jobs}

---

##### `bootstrap_scripts`<sup>Optional</sup> <a name="bootstrap_scripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.bootstrapScripts"></a>

```python
bootstrap_scripts: IResolvable | typing.List[MrsClusterV1BootstrapScripts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>]

bootstrap_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#bootstrap_scripts MrsClusterV1#bootstrap_scripts}

---

##### `cluster_admin_secret`<sup>Optional</sup> <a name="cluster_admin_secret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterAdminSecret"></a>

```python
cluster_admin_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}.

---

##### `cluster_type`<sup>Optional</sup> <a name="cluster_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterType"></a>

```python
cluster_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}.

---

##### `core_data_volume_count`<sup>Optional</sup> <a name="core_data_volume_count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeCount"></a>

```python
core_data_volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}.

---

##### `core_data_volume_size`<sup>Optional</sup> <a name="core_data_volume_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeSize"></a>

```python
core_data_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}.

---

##### `core_data_volume_type`<sup>Optional</sup> <a name="core_data_volume_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeType"></a>

```python
core_data_volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#id MrsClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_collection`<sup>Optional</sup> <a name="log_collection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.logCollection"></a>

```python
log_collection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}.

---

##### `master_data_volume_count`<sup>Optional</sup> <a name="master_data_volume_count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeCount"></a>

```python
master_data_volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}.

---

##### `master_data_volume_size`<sup>Optional</sup> <a name="master_data_volume_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeSize"></a>

```python
master_data_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}.

---

##### `master_data_volume_type`<sup>Optional</sup> <a name="master_data_volume_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeType"></a>

```python
master_data_volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#region MrsClusterV1#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#tags MrsClusterV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.timeouts"></a>

```python
timeouts: MrsClusterV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#timeouts MrsClusterV1#timeouts}

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}.

---

### MrsClusterV1Timeouts <a name="MrsClusterV1Timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#create MrsClusterV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#delete MrsClusterV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#create MrsClusterV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/mrs_cluster_v1#delete MrsClusterV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MrsClusterV1AddJobsList <a name="MrsClusterV1AddJobsList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1AddJobsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrsClusterV1AddJobsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MrsClusterV1AddJobs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>]

---


### MrsClusterV1AddJobsOutputReference <a name="MrsClusterV1AddJobsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1AddJobsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetFileAction">reset_file_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHiveScriptPath">reset_hive_script_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHql">reset_hql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetJobLog">reset_job_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetOutput">reset_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetShutdownCluster">reset_shutdown_cluster</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_file_action` <a name="reset_file_action" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetFileAction"></a>

```python
def reset_file_action() -> None
```

##### `reset_hive_script_path` <a name="reset_hive_script_path" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHiveScriptPath"></a>

```python
def reset_hive_script_path() -> None
```

##### `reset_hql` <a name="reset_hql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHql"></a>

```python
def reset_hql() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_job_log` <a name="reset_job_log" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetJobLog"></a>

```python
def reset_job_log() -> None
```

##### `reset_output` <a name="reset_output" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetOutput"></a>

```python
def reset_output() -> None
```

##### `reset_shutdown_cluster` <a name="reset_shutdown_cluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetShutdownCluster"></a>

```python
def reset_shutdown_cluster() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.argumentsInput">arguments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileActionInput">file_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPathInput">hive_script_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hqlInput">hql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPathInput">jar_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLogInput">job_log_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobNameInput">job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobTypeInput">job_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.outputInput">output_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownClusterInput">shutdown_cluster_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRunInput">submit_job_once_cluster_run_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.arguments">arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileAction">file_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPath">hive_script_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hql">hql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPath">jar_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLog">job_log</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobType">job_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.output">output</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownCluster">shutdown_cluster</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRun">submit_job_once_cluster_run</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.argumentsInput"></a>

```python
arguments_input: str
```

- *Type:* str

---

##### `file_action_input`<sup>Optional</sup> <a name="file_action_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileActionInput"></a>

```python
file_action_input: str
```

- *Type:* str

---

##### `hive_script_path_input`<sup>Optional</sup> <a name="hive_script_path_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPathInput"></a>

```python
hive_script_path_input: str
```

- *Type:* str

---

##### `hql_input`<sup>Optional</sup> <a name="hql_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hqlInput"></a>

```python
hql_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `jar_path_input`<sup>Optional</sup> <a name="jar_path_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPathInput"></a>

```python
jar_path_input: str
```

- *Type:* str

---

##### `job_log_input`<sup>Optional</sup> <a name="job_log_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLogInput"></a>

```python
job_log_input: str
```

- *Type:* str

---

##### `job_name_input`<sup>Optional</sup> <a name="job_name_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobNameInput"></a>

```python
job_name_input: str
```

- *Type:* str

---

##### `job_type_input`<sup>Optional</sup> <a name="job_type_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobTypeInput"></a>

```python
job_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.outputInput"></a>

```python
output_input: str
```

- *Type:* str

---

##### `shutdown_cluster_input`<sup>Optional</sup> <a name="shutdown_cluster_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownClusterInput"></a>

```python
shutdown_cluster_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `submit_job_once_cluster_run_input`<sup>Optional</sup> <a name="submit_job_once_cluster_run_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRunInput"></a>

```python
submit_job_once_cluster_run_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.arguments"></a>

```python
arguments: str
```

- *Type:* str

---

##### `file_action`<sup>Required</sup> <a name="file_action" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileAction"></a>

```python
file_action: str
```

- *Type:* str

---

##### `hive_script_path`<sup>Required</sup> <a name="hive_script_path" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPath"></a>

```python
hive_script_path: str
```

- *Type:* str

---

##### `hql`<sup>Required</sup> <a name="hql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hql"></a>

```python
hql: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `jar_path`<sup>Required</sup> <a name="jar_path" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPath"></a>

```python
jar_path: str
```

- *Type:* str

---

##### `job_log`<sup>Required</sup> <a name="job_log" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLog"></a>

```python
job_log: str
```

- *Type:* str

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobType"></a>

```python
job_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.output"></a>

```python
output: str
```

- *Type:* str

---

##### `shutdown_cluster`<sup>Required</sup> <a name="shutdown_cluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownCluster"></a>

```python
shutdown_cluster: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `submit_job_once_cluster_run`<sup>Required</sup> <a name="submit_job_once_cluster_run" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRun"></a>

```python
submit_job_once_cluster_run: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MrsClusterV1AddJobs
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>

---


### MrsClusterV1BootstrapScriptsList <a name="MrsClusterV1BootstrapScriptsList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1BootstrapScriptsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrsClusterV1BootstrapScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MrsClusterV1BootstrapScripts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>]

---


### MrsClusterV1BootstrapScriptsOutputReference <a name="MrsClusterV1BootstrapScriptsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetActiveMaster">reset_active_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetBeforeComponentStart">reset_before_component_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_active_master` <a name="reset_active_master" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetActiveMaster"></a>

```python
def reset_active_master() -> None
```

##### `reset_before_component_start` <a name="reset_before_component_start" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetBeforeComponentStart"></a>

```python
def reset_before_component_start() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMasterInput">active_master_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStartInput">before_component_start_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failActionInput">fail_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodesInput">nodes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMaster">active_master</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStart">before_component_start</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failAction">fail_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodes">nodes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_master_input`<sup>Optional</sup> <a name="active_master_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMasterInput"></a>

```python
active_master_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `before_component_start_input`<sup>Optional</sup> <a name="before_component_start_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStartInput"></a>

```python
before_component_start_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `fail_action_input`<sup>Optional</sup> <a name="fail_action_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failActionInput"></a>

```python
fail_action_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nodes_input`<sup>Optional</sup> <a name="nodes_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodesInput"></a>

```python
nodes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `active_master`<sup>Required</sup> <a name="active_master" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMaster"></a>

```python
active_master: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `before_component_start`<sup>Required</sup> <a name="before_component_start" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStart"></a>

```python
before_component_start: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `fail_action`<sup>Required</sup> <a name="fail_action" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failAction"></a>

```python
fail_action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodes"></a>

```python
nodes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MrsClusterV1BootstrapScripts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>

---


### MrsClusterV1ComponentListStructList <a name="MrsClusterV1ComponentListStructList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1ComponentListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MrsClusterV1ComponentListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MrsClusterV1ComponentListStruct]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>]

---


### MrsClusterV1ComponentListStructOutputReference <a name="MrsClusterV1ComponentListStructOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1ComponentListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentDesc">component_desc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentId">component_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentVersion">component_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentNameInput">component_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentName">component_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_desc`<sup>Required</sup> <a name="component_desc" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentDesc"></a>

```python
component_desc: str
```

- *Type:* str

---

##### `component_id`<sup>Required</sup> <a name="component_id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentId"></a>

```python
component_id: str
```

- *Type:* str

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentVersion"></a>

```python
component_version: str
```

- *Type:* str

---

##### `component_name_input`<sup>Optional</sup> <a name="component_name_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentNameInput"></a>

```python
component_name_input: str
```

- *Type:* str

---

##### `component_name`<sup>Required</sup> <a name="component_name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentName"></a>

```python
component_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MrsClusterV1ComponentListStruct
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>

---


### MrsClusterV1TimeoutsOutputReference <a name="MrsClusterV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_cluster_v1

mrsClusterV1.MrsClusterV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MrsClusterV1Timeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

---



