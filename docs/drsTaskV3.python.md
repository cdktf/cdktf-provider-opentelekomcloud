# `drsTaskV3` Submodule <a name="`drsTaskV3` Submodule" id="@cdktf/provider-opentelekomcloud.drsTaskV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsTaskV3 <a name="DrsTaskV3" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3 opentelekomcloud_drs_task_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_db: DrsTaskV3DestinationDb,
  direction: str,
  engine_type: str,
  name: str,
  source_db: DrsTaskV3SourceDb,
  type: str,
  description: str = None,
  destination_db_readonly: typing.Union[bool, IResolvable] = None,
  expired_days: typing.Union[int, float] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  limit_speed: typing.Union[IResolvable, typing.List[DrsTaskV3LimitSpeed]] = None,
  migrate_definer: typing.Union[bool, IResolvable] = None,
  migration_type: str = None,
  multi_write: typing.Union[bool, IResolvable] = None,
  net_type: str = None,
  node_num: typing.Union[int, float] = None,
  start_time: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DrsTaskV3Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.destinationDb">destination_db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | destination_db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#direction DrsTaskV3#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.engineType">engine_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.sourceDb">source_db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | source_db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#type DrsTaskV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#description DrsTaskV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.destinationDbReadonly">destination_db_readonly</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.expiredDays">expired_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#id DrsTaskV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.limitSpeed">limit_speed</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>]]</code> | limit_speed block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.migrateDefiner">migrate_definer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.migrationType">migration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.multiWrite">multi_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.netType">net_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.nodeNum">node_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#tags DrsTaskV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_db`<sup>Required</sup> <a name="destination_db" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.destinationDb"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

destination_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#destination_db DrsTaskV3#destination_db}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.direction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#direction DrsTaskV3#direction}.

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.engineType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `source_db`<sup>Required</sup> <a name="source_db" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.sourceDb"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

source_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#source_db DrsTaskV3#source_db}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#type DrsTaskV3#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#description DrsTaskV3#description}.

---

##### `destination_db_readonly`<sup>Optional</sup> <a name="destination_db_readonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.destinationDbReadonly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}.

---

##### `expired_days`<sup>Optional</sup> <a name="expired_days" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.expiredDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#id DrsTaskV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit_speed`<sup>Optional</sup> <a name="limit_speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.limitSpeed"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>]]

limit_speed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#limit_speed DrsTaskV3#limit_speed}

---

##### `migrate_definer`<sup>Optional</sup> <a name="migrate_definer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.migrateDefiner"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}.

---

##### `migration_type`<sup>Optional</sup> <a name="migration_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.migrationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}.

---

##### `multi_write`<sup>Optional</sup> <a name="multi_write" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.multiWrite"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}.

---

##### `net_type`<sup>Optional</sup> <a name="net_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.netType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}.

---

##### `node_num`<sup>Optional</sup> <a name="node_num" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.nodeNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#tags DrsTaskV3#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#timeouts DrsTaskV3#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb">put_destination_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putLimitSpeed">put_limit_speed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb">put_source_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDestinationDbReadonly">reset_destination_db_readonly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetExpiredDays">reset_expired_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetLimitSpeed">reset_limit_speed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrateDefiner">reset_migrate_definer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrationType">reset_migration_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMultiWrite">reset_multi_write</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNetType">reset_net_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNodeNum">reset_node_num</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_db` <a name="put_destination_db" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb"></a>

```python
def put_destination_db(
  engine_type: str,
  ip: str,
  password: str,
  port: typing.Union[int, float],
  user: str,
  instance_id: str = None,
  name: str = None,
  region: str = None,
  ssl_cert_check_sum: str = None,
  ssl_cert_key: str = None,
  ssl_cert_name: str = None,
  ssl_cert_password: str = None,
  ssl_enabled: typing.Union[bool, IResolvable] = None,
  subnet_id: str = None
) -> None
```

###### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.engineType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

###### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.ip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ip DrsTaskV3#ip}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#password DrsTaskV3#password}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#port DrsTaskV3#port}.

---

###### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.user"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#user DrsTaskV3#user}.

---

###### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#region DrsTaskV3#region}.

---

###### `ssl_cert_check_sum`<sup>Optional</sup> <a name="ssl_cert_check_sum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.sslCertCheckSum"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}.

---

###### `ssl_cert_key`<sup>Optional</sup> <a name="ssl_cert_key" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.sslCertKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}.

---

###### `ssl_cert_name`<sup>Optional</sup> <a name="ssl_cert_name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.sslCertName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}.

---

###### `ssl_cert_password`<sup>Optional</sup> <a name="ssl_cert_password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.sslCertPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}.

---

###### `ssl_enabled`<sup>Optional</sup> <a name="ssl_enabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.sslEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}.

---

##### `put_limit_speed` <a name="put_limit_speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putLimitSpeed"></a>

```python
def put_limit_speed(
  value: typing.Union[IResolvable, typing.List[DrsTaskV3LimitSpeed]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putLimitSpeed.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>]]

---

##### `put_source_db` <a name="put_source_db" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb"></a>

```python
def put_source_db(
  engine_type: str,
  ip: str,
  password: str,
  port: typing.Union[int, float],
  user: str,
  instance_id: str = None,
  name: str = None,
  region: str = None,
  ssl_cert_check_sum: str = None,
  ssl_cert_key: str = None,
  ssl_cert_name: str = None,
  ssl_cert_password: str = None,
  ssl_enabled: typing.Union[bool, IResolvable] = None,
  subnet_id: str = None
) -> None
```

###### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.engineType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

###### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.ip"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ip DrsTaskV3#ip}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#password DrsTaskV3#password}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#port DrsTaskV3#port}.

---

###### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.user"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#user DrsTaskV3#user}.

---

###### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#region DrsTaskV3#region}.

---

###### `ssl_cert_check_sum`<sup>Optional</sup> <a name="ssl_cert_check_sum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.sslCertCheckSum"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}.

---

###### `ssl_cert_key`<sup>Optional</sup> <a name="ssl_cert_key" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.sslCertKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}.

---

###### `ssl_cert_name`<sup>Optional</sup> <a name="ssl_cert_name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.sslCertName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}.

---

###### `ssl_cert_password`<sup>Optional</sup> <a name="ssl_cert_password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.sslCertPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}.

---

###### `ssl_enabled`<sup>Optional</sup> <a name="ssl_enabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.sslEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#create DrsTaskV3#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#delete DrsTaskV3#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_db_readonly` <a name="reset_destination_db_readonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDestinationDbReadonly"></a>

```python
def reset_destination_db_readonly() -> None
```

##### `reset_expired_days` <a name="reset_expired_days" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetExpiredDays"></a>

```python
def reset_expired_days() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_limit_speed` <a name="reset_limit_speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetLimitSpeed"></a>

```python
def reset_limit_speed() -> None
```

##### `reset_migrate_definer` <a name="reset_migrate_definer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrateDefiner"></a>

```python
def reset_migrate_definer() -> None
```

##### `reset_migration_type` <a name="reset_migration_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrationType"></a>

```python
def reset_migration_type() -> None
```

##### `reset_multi_write` <a name="reset_multi_write" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMultiWrite"></a>

```python
def reset_multi_write() -> None
```

##### `reset_net_type` <a name="reset_net_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNetType"></a>

```python
def reset_net_type() -> None
```

##### `reset_node_num` <a name="reset_node_num" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNodeNum"></a>

```python
def reset_node_num() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DrsTaskV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DrsTaskV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DrsTaskV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DrsTaskV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DrsTaskV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDb">destination_db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference">DrsTaskV3DestinationDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeed">limit_speed</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList">DrsTaskV3LimitSpeedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDb">source_db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference">DrsTaskV3SourceDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference">DrsTaskV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbInput">destination_db_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonlyInput">destination_db_readonly_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineTypeInput">engine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDaysInput">expired_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeedInput">limit_speed_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefinerInput">migrate_definer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationTypeInput">migration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWriteInput">multi_write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netTypeInput">net_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNumInput">node_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDbInput">source_db_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonly">destination_db_readonly</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineType">engine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDays">expired_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefiner">migrate_definer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationType">migration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWrite">multi_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netType">net_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNum">node_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `destination_db`<sup>Required</sup> <a name="destination_db" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDb"></a>

```python
destination_db: DrsTaskV3DestinationDbOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference">DrsTaskV3DestinationDbOutputReference</a>

---

##### `limit_speed`<sup>Required</sup> <a name="limit_speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeed"></a>

```python
limit_speed: DrsTaskV3LimitSpeedList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList">DrsTaskV3LimitSpeedList</a>

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `source_db`<sup>Required</sup> <a name="source_db" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDb"></a>

```python
source_db: DrsTaskV3SourceDbOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference">DrsTaskV3SourceDbOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeouts"></a>

```python
timeouts: DrsTaskV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference">DrsTaskV3TimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_db_input`<sup>Optional</sup> <a name="destination_db_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbInput"></a>

```python
destination_db_input: DrsTaskV3DestinationDb
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

---

##### `destination_db_readonly_input`<sup>Optional</sup> <a name="destination_db_readonly_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonlyInput"></a>

```python
destination_db_readonly_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `engine_type_input`<sup>Optional</sup> <a name="engine_type_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineTypeInput"></a>

```python
engine_type_input: str
```

- *Type:* str

---

##### `expired_days_input`<sup>Optional</sup> <a name="expired_days_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDaysInput"></a>

```python
expired_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_speed_input`<sup>Optional</sup> <a name="limit_speed_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeedInput"></a>

```python
limit_speed_input: typing.Union[IResolvable, typing.List[DrsTaskV3LimitSpeed]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>]]

---

##### `migrate_definer_input`<sup>Optional</sup> <a name="migrate_definer_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefinerInput"></a>

```python
migrate_definer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `migration_type_input`<sup>Optional</sup> <a name="migration_type_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationTypeInput"></a>

```python
migration_type_input: str
```

- *Type:* str

---

##### `multi_write_input`<sup>Optional</sup> <a name="multi_write_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWriteInput"></a>

```python
multi_write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `net_type_input`<sup>Optional</sup> <a name="net_type_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netTypeInput"></a>

```python
net_type_input: str
```

- *Type:* str

---

##### `node_num_input`<sup>Optional</sup> <a name="node_num_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNumInput"></a>

```python
node_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_db_input`<sup>Optional</sup> <a name="source_db_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDbInput"></a>

```python
source_db_input: DrsTaskV3SourceDb
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DrsTaskV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_db_readonly`<sup>Required</sup> <a name="destination_db_readonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonly"></a>

```python
destination_db_readonly: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

---

##### `expired_days`<sup>Required</sup> <a name="expired_days" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDays"></a>

```python
expired_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `migrate_definer`<sup>Required</sup> <a name="migrate_definer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefiner"></a>

```python
migrate_definer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `migration_type`<sup>Required</sup> <a name="migration_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationType"></a>

```python
migration_type: str
```

- *Type:* str

---

##### `multi_write`<sup>Required</sup> <a name="multi_write" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWrite"></a>

```python
multi_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `net_type`<sup>Required</sup> <a name="net_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netType"></a>

```python
net_type: str
```

- *Type:* str

---

##### `node_num`<sup>Required</sup> <a name="node_num" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNum"></a>

```python
node_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DrsTaskV3Config <a name="DrsTaskV3Config" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_db: DrsTaskV3DestinationDb,
  direction: str,
  engine_type: str,
  name: str,
  source_db: DrsTaskV3SourceDb,
  type: str,
  description: str = None,
  destination_db_readonly: typing.Union[bool, IResolvable] = None,
  expired_days: typing.Union[int, float] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  limit_speed: typing.Union[IResolvable, typing.List[DrsTaskV3LimitSpeed]] = None,
  migrate_definer: typing.Union[bool, IResolvable] = None,
  migration_type: str = None,
  multi_write: typing.Union[bool, IResolvable] = None,
  net_type: str = None,
  node_num: typing.Union[int, float] = None,
  start_time: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DrsTaskV3Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDb">destination_db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | destination_db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#direction DrsTaskV3#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.engineType">engine_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.sourceDb">source_db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | source_db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#type DrsTaskV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#description DrsTaskV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDbReadonly">destination_db_readonly</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.expiredDays">expired_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#id DrsTaskV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.limitSpeed">limit_speed</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>]]</code> | limit_speed block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrateDefiner">migrate_definer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrationType">migration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.multiWrite">multi_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.netType">net_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.nodeNum">node_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#tags DrsTaskV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_db`<sup>Required</sup> <a name="destination_db" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDb"></a>

```python
destination_db: DrsTaskV3DestinationDb
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

destination_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#destination_db DrsTaskV3#destination_db}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#direction DrsTaskV3#direction}.

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `source_db`<sup>Required</sup> <a name="source_db" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.sourceDb"></a>

```python
source_db: DrsTaskV3SourceDb
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

source_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#source_db DrsTaskV3#source_db}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#type DrsTaskV3#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#description DrsTaskV3#description}.

---

##### `destination_db_readonly`<sup>Optional</sup> <a name="destination_db_readonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDbReadonly"></a>

```python
destination_db_readonly: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}.

---

##### `expired_days`<sup>Optional</sup> <a name="expired_days" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.expiredDays"></a>

```python
expired_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#id DrsTaskV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit_speed`<sup>Optional</sup> <a name="limit_speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.limitSpeed"></a>

```python
limit_speed: typing.Union[IResolvable, typing.List[DrsTaskV3LimitSpeed]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>]]

limit_speed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#limit_speed DrsTaskV3#limit_speed}

---

##### `migrate_definer`<sup>Optional</sup> <a name="migrate_definer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrateDefiner"></a>

```python
migrate_definer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}.

---

##### `migration_type`<sup>Optional</sup> <a name="migration_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrationType"></a>

```python
migration_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}.

---

##### `multi_write`<sup>Optional</sup> <a name="multi_write" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.multiWrite"></a>

```python
multi_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}.

---

##### `net_type`<sup>Optional</sup> <a name="net_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.netType"></a>

```python
net_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}.

---

##### `node_num`<sup>Optional</sup> <a name="node_num" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.nodeNum"></a>

```python
node_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#tags DrsTaskV3#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.timeouts"></a>

```python
timeouts: DrsTaskV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#timeouts DrsTaskV3#timeouts}

---

### DrsTaskV3DestinationDb <a name="DrsTaskV3DestinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3DestinationDb(
  engine_type: str,
  ip: str,
  password: str,
  port: typing.Union[int, float],
  user: str,
  instance_id: str = None,
  name: str = None,
  region: str = None,
  ssl_cert_check_sum: str = None,
  ssl_cert_key: str = None,
  ssl_cert_name: str = None,
  ssl_cert_password: str = None,
  ssl_enabled: typing.Union[bool, IResolvable] = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.engineType">engine_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.ip">ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ip DrsTaskV3#ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#password DrsTaskV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#port DrsTaskV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.user">user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#user DrsTaskV3#user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#region DrsTaskV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertCheckSum">ssl_cert_check_sum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertKey">ssl_cert_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertName">ssl_cert_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertPassword">ssl_cert_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslEnabled">ssl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}. |

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.ip"></a>

```python
ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ip DrsTaskV3#ip}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#password DrsTaskV3#password}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#port DrsTaskV3#port}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.user"></a>

```python
user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#user DrsTaskV3#user}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#region DrsTaskV3#region}.

---

##### `ssl_cert_check_sum`<sup>Optional</sup> <a name="ssl_cert_check_sum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertCheckSum"></a>

```python
ssl_cert_check_sum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}.

---

##### `ssl_cert_key`<sup>Optional</sup> <a name="ssl_cert_key" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertKey"></a>

```python
ssl_cert_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}.

---

##### `ssl_cert_name`<sup>Optional</sup> <a name="ssl_cert_name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertName"></a>

```python
ssl_cert_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}.

---

##### `ssl_cert_password`<sup>Optional</sup> <a name="ssl_cert_password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertPassword"></a>

```python
ssl_cert_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}.

---

##### `ssl_enabled`<sup>Optional</sup> <a name="ssl_enabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslEnabled"></a>

```python
ssl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}.

---

### DrsTaskV3LimitSpeed <a name="DrsTaskV3LimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3LimitSpeed(
  end_time: str,
  speed: str,
  start_time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#end_time DrsTaskV3#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.speed">speed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#speed DrsTaskV3#speed}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}. |

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#end_time DrsTaskV3#end_time}.

---

##### `speed`<sup>Required</sup> <a name="speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.speed"></a>

```python
speed: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#speed DrsTaskV3#speed}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}.

---

### DrsTaskV3SourceDb <a name="DrsTaskV3SourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3SourceDb(
  engine_type: str,
  ip: str,
  password: str,
  port: typing.Union[int, float],
  user: str,
  instance_id: str = None,
  name: str = None,
  region: str = None,
  ssl_cert_check_sum: str = None,
  ssl_cert_key: str = None,
  ssl_cert_name: str = None,
  ssl_cert_password: str = None,
  ssl_enabled: typing.Union[bool, IResolvable] = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.engineType">engine_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.ip">ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ip DrsTaskV3#ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#password DrsTaskV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#port DrsTaskV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.user">user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#user DrsTaskV3#user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#region DrsTaskV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertCheckSum">ssl_cert_check_sum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertKey">ssl_cert_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertName">ssl_cert_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertPassword">ssl_cert_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslEnabled">ssl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}. |

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.ip"></a>

```python
ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ip DrsTaskV3#ip}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#password DrsTaskV3#password}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#port DrsTaskV3#port}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.user"></a>

```python
user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#user DrsTaskV3#user}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#region DrsTaskV3#region}.

---

##### `ssl_cert_check_sum`<sup>Optional</sup> <a name="ssl_cert_check_sum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertCheckSum"></a>

```python
ssl_cert_check_sum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}.

---

##### `ssl_cert_key`<sup>Optional</sup> <a name="ssl_cert_key" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertKey"></a>

```python
ssl_cert_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}.

---

##### `ssl_cert_name`<sup>Optional</sup> <a name="ssl_cert_name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertName"></a>

```python
ssl_cert_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}.

---

##### `ssl_cert_password`<sup>Optional</sup> <a name="ssl_cert_password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertPassword"></a>

```python
ssl_cert_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}.

---

##### `ssl_enabled`<sup>Optional</sup> <a name="ssl_enabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslEnabled"></a>

```python
ssl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}.

---

### DrsTaskV3Timeouts <a name="DrsTaskV3Timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#create DrsTaskV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#delete DrsTaskV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#create DrsTaskV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/drs_task_v3#delete DrsTaskV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DrsTaskV3DestinationDbOutputReference <a name="DrsTaskV3DestinationDbOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3DestinationDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertCheckSum">reset_ssl_cert_check_sum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertKey">reset_ssl_cert_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertName">reset_ssl_cert_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertPassword">reset_ssl_cert_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslEnabled">reset_ssl_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_ssl_cert_check_sum` <a name="reset_ssl_cert_check_sum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertCheckSum"></a>

```python
def reset_ssl_cert_check_sum() -> None
```

##### `reset_ssl_cert_key` <a name="reset_ssl_cert_key" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertKey"></a>

```python
def reset_ssl_cert_key() -> None
```

##### `reset_ssl_cert_name` <a name="reset_ssl_cert_name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertName"></a>

```python
def reset_ssl_cert_name() -> None
```

##### `reset_ssl_cert_password` <a name="reset_ssl_cert_password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertPassword"></a>

```python
def reset_ssl_cert_password() -> None
```

##### `reset_ssl_enabled` <a name="reset_ssl_enabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslEnabled"></a>

```python
def reset_ssl_enabled() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineTypeInput">engine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSumInput">ssl_cert_check_sum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKeyInput">ssl_cert_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertNameInput">ssl_cert_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPasswordInput">ssl_cert_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabledInput">ssl_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineType">engine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSum">ssl_cert_check_sum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKey">ssl_cert_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertName">ssl_cert_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPassword">ssl_cert_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabled">ssl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `engine_type_input`<sup>Optional</sup> <a name="engine_type_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineTypeInput"></a>

```python
engine_type_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ssl_cert_check_sum_input`<sup>Optional</sup> <a name="ssl_cert_check_sum_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSumInput"></a>

```python
ssl_cert_check_sum_input: str
```

- *Type:* str

---

##### `ssl_cert_key_input`<sup>Optional</sup> <a name="ssl_cert_key_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKeyInput"></a>

```python
ssl_cert_key_input: str
```

- *Type:* str

---

##### `ssl_cert_name_input`<sup>Optional</sup> <a name="ssl_cert_name_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertNameInput"></a>

```python
ssl_cert_name_input: str
```

- *Type:* str

---

##### `ssl_cert_password_input`<sup>Optional</sup> <a name="ssl_cert_password_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPasswordInput"></a>

```python
ssl_cert_password_input: str
```

- *Type:* str

---

##### `ssl_enabled_input`<sup>Optional</sup> <a name="ssl_enabled_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabledInput"></a>

```python
ssl_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `ssl_cert_check_sum`<sup>Required</sup> <a name="ssl_cert_check_sum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSum"></a>

```python
ssl_cert_check_sum: str
```

- *Type:* str

---

##### `ssl_cert_key`<sup>Required</sup> <a name="ssl_cert_key" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKey"></a>

```python
ssl_cert_key: str
```

- *Type:* str

---

##### `ssl_cert_name`<sup>Required</sup> <a name="ssl_cert_name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertName"></a>

```python
ssl_cert_name: str
```

- *Type:* str

---

##### `ssl_cert_password`<sup>Required</sup> <a name="ssl_cert_password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPassword"></a>

```python
ssl_cert_password: str
```

- *Type:* str

---

##### `ssl_enabled`<sup>Required</sup> <a name="ssl_enabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabled"></a>

```python
ssl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.internalValue"></a>

```python
internal_value: DrsTaskV3DestinationDb
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

---


### DrsTaskV3LimitSpeedList <a name="DrsTaskV3LimitSpeedList" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3LimitSpeedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DrsTaskV3LimitSpeedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DrsTaskV3LimitSpeed]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>]]

---


### DrsTaskV3LimitSpeedOutputReference <a name="DrsTaskV3LimitSpeedOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3LimitSpeedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speedInput">speed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speed">speed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `speed_input`<sup>Optional</sup> <a name="speed_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speedInput"></a>

```python
speed_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `speed`<sup>Required</sup> <a name="speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speed"></a>

```python
speed: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DrsTaskV3LimitSpeed]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>]

---


### DrsTaskV3SourceDbOutputReference <a name="DrsTaskV3SourceDbOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3SourceDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertCheckSum">reset_ssl_cert_check_sum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertKey">reset_ssl_cert_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertName">reset_ssl_cert_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertPassword">reset_ssl_cert_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslEnabled">reset_ssl_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_ssl_cert_check_sum` <a name="reset_ssl_cert_check_sum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertCheckSum"></a>

```python
def reset_ssl_cert_check_sum() -> None
```

##### `reset_ssl_cert_key` <a name="reset_ssl_cert_key" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertKey"></a>

```python
def reset_ssl_cert_key() -> None
```

##### `reset_ssl_cert_name` <a name="reset_ssl_cert_name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertName"></a>

```python
def reset_ssl_cert_name() -> None
```

##### `reset_ssl_cert_password` <a name="reset_ssl_cert_password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertPassword"></a>

```python
def reset_ssl_cert_password() -> None
```

##### `reset_ssl_enabled` <a name="reset_ssl_enabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslEnabled"></a>

```python
def reset_ssl_enabled() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineTypeInput">engine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSumInput">ssl_cert_check_sum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKeyInput">ssl_cert_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertNameInput">ssl_cert_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPasswordInput">ssl_cert_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabledInput">ssl_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineType">engine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSum">ssl_cert_check_sum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKey">ssl_cert_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertName">ssl_cert_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPassword">ssl_cert_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabled">ssl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `engine_type_input`<sup>Optional</sup> <a name="engine_type_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineTypeInput"></a>

```python
engine_type_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ssl_cert_check_sum_input`<sup>Optional</sup> <a name="ssl_cert_check_sum_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSumInput"></a>

```python
ssl_cert_check_sum_input: str
```

- *Type:* str

---

##### `ssl_cert_key_input`<sup>Optional</sup> <a name="ssl_cert_key_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKeyInput"></a>

```python
ssl_cert_key_input: str
```

- *Type:* str

---

##### `ssl_cert_name_input`<sup>Optional</sup> <a name="ssl_cert_name_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertNameInput"></a>

```python
ssl_cert_name_input: str
```

- *Type:* str

---

##### `ssl_cert_password_input`<sup>Optional</sup> <a name="ssl_cert_password_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPasswordInput"></a>

```python
ssl_cert_password_input: str
```

- *Type:* str

---

##### `ssl_enabled_input`<sup>Optional</sup> <a name="ssl_enabled_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabledInput"></a>

```python
ssl_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `ssl_cert_check_sum`<sup>Required</sup> <a name="ssl_cert_check_sum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSum"></a>

```python
ssl_cert_check_sum: str
```

- *Type:* str

---

##### `ssl_cert_key`<sup>Required</sup> <a name="ssl_cert_key" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKey"></a>

```python
ssl_cert_key: str
```

- *Type:* str

---

##### `ssl_cert_name`<sup>Required</sup> <a name="ssl_cert_name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertName"></a>

```python
ssl_cert_name: str
```

- *Type:* str

---

##### `ssl_cert_password`<sup>Required</sup> <a name="ssl_cert_password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPassword"></a>

```python
ssl_cert_password: str
```

- *Type:* str

---

##### `ssl_enabled`<sup>Required</sup> <a name="ssl_enabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabled"></a>

```python
ssl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.internalValue"></a>

```python
internal_value: DrsTaskV3SourceDb
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

---


### DrsTaskV3TimeoutsOutputReference <a name="DrsTaskV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import drs_task_v3

drsTaskV3.DrsTaskV3TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DrsTaskV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>]

---



