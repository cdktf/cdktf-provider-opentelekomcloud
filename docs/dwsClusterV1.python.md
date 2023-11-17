# `opentelekomcloud_dws_cluster_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_dws_cluster_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1).

# `dwsClusterV1` Submodule <a name="`dwsClusterV1` Submodule" id="@cdktf/provider-opentelekomcloud.dwsClusterV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DwsClusterV1 <a name="DwsClusterV1" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1 opentelekomcloud_dws_cluster_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_id: str,
  node_type: str,
  number_of_node: typing.Union[int, float],
  security_group_id: str,
  user_name: str,
  user_pwd: str,
  vpc_id: str,
  availability_zone: str = None,
  endpoints: typing.Union[IResolvable, typing.List[DwsClusterV1Endpoints]] = None,
  id: str = None,
  keep_last_manual_snapshot: typing.Union[int, float] = None,
  number_of_cn: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  public_endpoints: typing.Union[IResolvable, typing.List[DwsClusterV1PublicEndpoints]] = None,
  public_ip: DwsClusterV1PublicIp = None,
  timeouts: DwsClusterV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#name DwsClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#network_id DwsClusterV1#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#node_type DwsClusterV1#node_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.numberOfNode">number_of_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#number_of_node DwsClusterV1#number_of_node}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#security_group_id DwsClusterV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#user_name DwsClusterV1#user_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.userPwd">user_pwd</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#user_pwd DwsClusterV1#user_pwd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#vpc_id DwsClusterV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#availability_zone DwsClusterV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.endpoints">endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>]]</code> | endpoints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#id DwsClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.keepLastManualSnapshot">keep_last_manual_snapshot</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#keep_last_manual_snapshot DwsClusterV1#keep_last_manual_snapshot}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.numberOfCn">number_of_cn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#number_of_cn DwsClusterV1#number_of_cn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#port DwsClusterV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.publicEndpoints">public_endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>]]</code> | public_endpoints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.publicIp">public_ip</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a></code> | public_ip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#name DwsClusterV1#name}.

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.networkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#network_id DwsClusterV1#network_id}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.nodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#node_type DwsClusterV1#node_type}.

---

##### `number_of_node`<sup>Required</sup> <a name="number_of_node" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.numberOfNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#number_of_node DwsClusterV1#number_of_node}.

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#security_group_id DwsClusterV1#security_group_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#user_name DwsClusterV1#user_name}.

---

##### `user_pwd`<sup>Required</sup> <a name="user_pwd" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.userPwd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#user_pwd DwsClusterV1#user_pwd}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#vpc_id DwsClusterV1#vpc_id}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#availability_zone DwsClusterV1#availability_zone}.

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.endpoints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>]]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#endpoints DwsClusterV1#endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#id DwsClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keep_last_manual_snapshot`<sup>Optional</sup> <a name="keep_last_manual_snapshot" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.keepLastManualSnapshot"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#keep_last_manual_snapshot DwsClusterV1#keep_last_manual_snapshot}.

---

##### `number_of_cn`<sup>Optional</sup> <a name="number_of_cn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.numberOfCn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#number_of_cn DwsClusterV1#number_of_cn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#port DwsClusterV1#port}.

---

##### `public_endpoints`<sup>Optional</sup> <a name="public_endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.publicEndpoints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>]]

public_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#public_endpoints DwsClusterV1#public_endpoints}

---

##### `public_ip`<sup>Optional</sup> <a name="public_ip" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.publicIp"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

public_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#public_ip DwsClusterV1#public_ip}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#timeouts DwsClusterV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putEndpoints">put_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicEndpoints">put_public_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicIp">put_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetEndpoints">reset_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetKeepLastManualSnapshot">reset_keep_last_manual_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetNumberOfCn">reset_number_of_cn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPublicEndpoints">reset_public_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPublicIp">reset_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_endpoints` <a name="put_endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putEndpoints"></a>

```python
def put_endpoints(
  value: typing.Union[IResolvable, typing.List[DwsClusterV1Endpoints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putEndpoints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>]]

---

##### `put_public_endpoints` <a name="put_public_endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicEndpoints"></a>

```python
def put_public_endpoints(
  value: typing.Union[IResolvable, typing.List[DwsClusterV1PublicEndpoints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicEndpoints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>]]

---

##### `put_public_ip` <a name="put_public_ip" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicIp"></a>

```python
def put_public_ip(
  eip_id: str = None,
  public_bind_type: str = None
) -> None
```

###### `eip_id`<sup>Optional</sup> <a name="eip_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicIp.parameter.eipId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#eip_id DwsClusterV1#eip_id}.

---

###### `public_bind_type`<sup>Optional</sup> <a name="public_bind_type" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicIp.parameter.publicBindType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#public_bind_type DwsClusterV1#public_bind_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#create DwsClusterV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#delete DwsClusterV1#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#update DwsClusterV1#update}.

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_endpoints` <a name="reset_endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetEndpoints"></a>

```python
def reset_endpoints() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_keep_last_manual_snapshot` <a name="reset_keep_last_manual_snapshot" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetKeepLastManualSnapshot"></a>

```python
def reset_keep_last_manual_snapshot() -> None
```

##### `reset_number_of_cn` <a name="reset_number_of_cn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetNumberOfCn"></a>

```python
def reset_number_of_cn() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_public_endpoints` <a name="reset_public_endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPublicEndpoints"></a>

```python
def reset_public_endpoints() -> None
```

##### `reset_public_ip` <a name="reset_public_ip" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPublicIp"></a>

```python
def reset_public_ip() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DwsClusterV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DwsClusterV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DwsClusterV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DwsClusterV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DwsClusterV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList">DwsClusterV1EndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.privateIp">private_ip</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicEndpoints">public_endpoints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList">DwsClusterV1PublicEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicIp">public_ip</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference">DwsClusterV1PublicIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.recentEvent">recent_event</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.subStatus">sub_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.taskStatus">task_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference">DwsClusterV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.endpointsInput">endpoints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.keepLastManualSnapshotInput">keep_last_manual_snapshot_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.networkIdInput">network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfCnInput">number_of_cn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfNodeInput">number_of_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicEndpointsInput">public_endpoints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicIpInput">public_ip_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userPwdInput">user_pwd_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.keepLastManualSnapshot">keep_last_manual_snapshot</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfCn">number_of_cn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfNode">number_of_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userPwd">user_pwd</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.endpoints"></a>

```python
endpoints: DwsClusterV1EndpointsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList">DwsClusterV1EndpointsList</a>

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.privateIp"></a>

```python
private_ip: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `public_endpoints`<sup>Required</sup> <a name="public_endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicEndpoints"></a>

```python
public_endpoints: DwsClusterV1PublicEndpointsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList">DwsClusterV1PublicEndpointsList</a>

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicIp"></a>

```python
public_ip: DwsClusterV1PublicIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference">DwsClusterV1PublicIpOutputReference</a>

---

##### `recent_event`<sup>Required</sup> <a name="recent_event" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.recentEvent"></a>

```python
recent_event: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `sub_status`<sup>Required</sup> <a name="sub_status" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.subStatus"></a>

```python
sub_status: str
```

- *Type:* str

---

##### `task_status`<sup>Required</sup> <a name="task_status" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.taskStatus"></a>

```python
task_status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.timeouts"></a>

```python
timeouts: DwsClusterV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference">DwsClusterV1TimeoutsOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `endpoints_input`<sup>Optional</sup> <a name="endpoints_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.endpointsInput"></a>

```python
endpoints_input: typing.Union[IResolvable, typing.List[DwsClusterV1Endpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `keep_last_manual_snapshot_input`<sup>Optional</sup> <a name="keep_last_manual_snapshot_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.keepLastManualSnapshotInput"></a>

```python
keep_last_manual_snapshot_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_id_input`<sup>Optional</sup> <a name="network_id_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.networkIdInput"></a>

```python
network_id_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `number_of_cn_input`<sup>Optional</sup> <a name="number_of_cn_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfCnInput"></a>

```python
number_of_cn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_node_input`<sup>Optional</sup> <a name="number_of_node_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfNodeInput"></a>

```python
number_of_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_endpoints_input`<sup>Optional</sup> <a name="public_endpoints_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicEndpointsInput"></a>

```python
public_endpoints_input: typing.Union[IResolvable, typing.List[DwsClusterV1PublicEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>]]

---

##### `public_ip_input`<sup>Optional</sup> <a name="public_ip_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicIpInput"></a>

```python
public_ip_input: DwsClusterV1PublicIp
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DwsClusterV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>]

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `user_pwd_input`<sup>Optional</sup> <a name="user_pwd_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userPwdInput"></a>

```python
user_pwd_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `keep_last_manual_snapshot`<sup>Required</sup> <a name="keep_last_manual_snapshot" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.keepLastManualSnapshot"></a>

```python
keep_last_manual_snapshot: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `number_of_cn`<sup>Required</sup> <a name="number_of_cn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfCn"></a>

```python
number_of_cn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_node`<sup>Required</sup> <a name="number_of_node" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfNode"></a>

```python
number_of_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `user_pwd`<sup>Required</sup> <a name="user_pwd" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userPwd"></a>

```python
user_pwd: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DwsClusterV1Config <a name="DwsClusterV1Config" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_id: str,
  node_type: str,
  number_of_node: typing.Union[int, float],
  security_group_id: str,
  user_name: str,
  user_pwd: str,
  vpc_id: str,
  availability_zone: str = None,
  endpoints: typing.Union[IResolvable, typing.List[DwsClusterV1Endpoints]] = None,
  id: str = None,
  keep_last_manual_snapshot: typing.Union[int, float] = None,
  number_of_cn: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  public_endpoints: typing.Union[IResolvable, typing.List[DwsClusterV1PublicEndpoints]] = None,
  public_ip: DwsClusterV1PublicIp = None,
  timeouts: DwsClusterV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#name DwsClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#network_id DwsClusterV1#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#node_type DwsClusterV1#node_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.numberOfNode">number_of_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#number_of_node DwsClusterV1#number_of_node}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#security_group_id DwsClusterV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#user_name DwsClusterV1#user_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.userPwd">user_pwd</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#user_pwd DwsClusterV1#user_pwd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#vpc_id DwsClusterV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#availability_zone DwsClusterV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.endpoints">endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>]]</code> | endpoints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#id DwsClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.keepLastManualSnapshot">keep_last_manual_snapshot</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#keep_last_manual_snapshot DwsClusterV1#keep_last_manual_snapshot}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.numberOfCn">number_of_cn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#number_of_cn DwsClusterV1#number_of_cn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#port DwsClusterV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.publicEndpoints">public_endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>]]</code> | public_endpoints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.publicIp">public_ip</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a></code> | public_ip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#name DwsClusterV1#name}.

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#network_id DwsClusterV1#network_id}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#node_type DwsClusterV1#node_type}.

---

##### `number_of_node`<sup>Required</sup> <a name="number_of_node" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.numberOfNode"></a>

```python
number_of_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#number_of_node DwsClusterV1#number_of_node}.

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#security_group_id DwsClusterV1#security_group_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#user_name DwsClusterV1#user_name}.

---

##### `user_pwd`<sup>Required</sup> <a name="user_pwd" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.userPwd"></a>

```python
user_pwd: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#user_pwd DwsClusterV1#user_pwd}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#vpc_id DwsClusterV1#vpc_id}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#availability_zone DwsClusterV1#availability_zone}.

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.endpoints"></a>

```python
endpoints: typing.Union[IResolvable, typing.List[DwsClusterV1Endpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>]]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#endpoints DwsClusterV1#endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#id DwsClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keep_last_manual_snapshot`<sup>Optional</sup> <a name="keep_last_manual_snapshot" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.keepLastManualSnapshot"></a>

```python
keep_last_manual_snapshot: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#keep_last_manual_snapshot DwsClusterV1#keep_last_manual_snapshot}.

---

##### `number_of_cn`<sup>Optional</sup> <a name="number_of_cn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.numberOfCn"></a>

```python
number_of_cn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#number_of_cn DwsClusterV1#number_of_cn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#port DwsClusterV1#port}.

---

##### `public_endpoints`<sup>Optional</sup> <a name="public_endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.publicEndpoints"></a>

```python
public_endpoints: typing.Union[IResolvable, typing.List[DwsClusterV1PublicEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>]]

public_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#public_endpoints DwsClusterV1#public_endpoints}

---

##### `public_ip`<sup>Optional</sup> <a name="public_ip" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.publicIp"></a>

```python
public_ip: DwsClusterV1PublicIp
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

public_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#public_ip DwsClusterV1#public_ip}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.timeouts"></a>

```python
timeouts: DwsClusterV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#timeouts DwsClusterV1#timeouts}

---

### DwsClusterV1Endpoints <a name="DwsClusterV1Endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1Endpoints()
```


### DwsClusterV1PublicEndpoints <a name="DwsClusterV1PublicEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1PublicEndpoints()
```


### DwsClusterV1PublicIp <a name="DwsClusterV1PublicIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1PublicIp(
  eip_id: str = None,
  public_bind_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.property.eipId">eip_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#eip_id DwsClusterV1#eip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.property.publicBindType">public_bind_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#public_bind_type DwsClusterV1#public_bind_type}. |

---

##### `eip_id`<sup>Optional</sup> <a name="eip_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.property.eipId"></a>

```python
eip_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#eip_id DwsClusterV1#eip_id}.

---

##### `public_bind_type`<sup>Optional</sup> <a name="public_bind_type" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.property.publicBindType"></a>

```python
public_bind_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#public_bind_type DwsClusterV1#public_bind_type}.

---

### DwsClusterV1Timeouts <a name="DwsClusterV1Timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#create DwsClusterV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#delete DwsClusterV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#update DwsClusterV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#create DwsClusterV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#delete DwsClusterV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/dws_cluster_v1#update DwsClusterV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DwsClusterV1EndpointsList <a name="DwsClusterV1EndpointsList" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1EndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DwsClusterV1EndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DwsClusterV1Endpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>]]

---


### DwsClusterV1EndpointsOutputReference <a name="DwsClusterV1EndpointsOutputReference" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1EndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.connectInfo">connect_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.jdbcUrl">jdbc_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connect_info`<sup>Required</sup> <a name="connect_info" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.connectInfo"></a>

```python
connect_info: str
```

- *Type:* str

---

##### `jdbc_url`<sup>Required</sup> <a name="jdbc_url" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.jdbcUrl"></a>

```python
jdbc_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DwsClusterV1Endpoints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>]

---


### DwsClusterV1PublicEndpointsList <a name="DwsClusterV1PublicEndpointsList" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1PublicEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DwsClusterV1PublicEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DwsClusterV1PublicEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>]]

---


### DwsClusterV1PublicEndpointsOutputReference <a name="DwsClusterV1PublicEndpointsOutputReference" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.jdbcUrl">jdbc_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.publicConnectInfo">public_connect_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jdbc_url`<sup>Required</sup> <a name="jdbc_url" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.jdbcUrl"></a>

```python
jdbc_url: str
```

- *Type:* str

---

##### `public_connect_info`<sup>Required</sup> <a name="public_connect_info" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.publicConnectInfo"></a>

```python
public_connect_info: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DwsClusterV1PublicEndpoints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>]

---


### DwsClusterV1PublicIpOutputReference <a name="DwsClusterV1PublicIpOutputReference" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1PublicIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resetEipId">reset_eip_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resetPublicBindType">reset_public_bind_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_eip_id` <a name="reset_eip_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resetEipId"></a>

```python
def reset_eip_id() -> None
```

##### `reset_public_bind_type` <a name="reset_public_bind_type" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resetPublicBindType"></a>

```python
def reset_public_bind_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.eipIdInput">eip_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.publicBindTypeInput">public_bind_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.eipId">eip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.publicBindType">public_bind_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eip_id_input`<sup>Optional</sup> <a name="eip_id_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.eipIdInput"></a>

```python
eip_id_input: str
```

- *Type:* str

---

##### `public_bind_type_input`<sup>Optional</sup> <a name="public_bind_type_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.publicBindTypeInput"></a>

```python
public_bind_type_input: str
```

- *Type:* str

---

##### `eip_id`<sup>Required</sup> <a name="eip_id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.eipId"></a>

```python
eip_id: str
```

- *Type:* str

---

##### `public_bind_type`<sup>Required</sup> <a name="public_bind_type" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.publicBindType"></a>

```python
public_bind_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.internalValue"></a>

```python
internal_value: DwsClusterV1PublicIp
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

---


### DwsClusterV1TimeoutsOutputReference <a name="DwsClusterV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import dws_cluster_v1

dwsClusterV1.DwsClusterV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DwsClusterV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>]

---



