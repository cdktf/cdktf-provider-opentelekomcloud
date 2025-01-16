# `asGroupV1` Submodule <a name="`asGroupV1` Submodule" id="@cdktf/provider-opentelekomcloud.asGroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsGroupV1 <a name="AsGroupV1" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1 opentelekomcloud_as_group_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delete_instances: str,
  delete_publicip: typing.Union[bool, IResolvable],
  networks: typing.Union[IResolvable, typing.List[AsGroupV1Networks]],
  scaling_group_name: str,
  vpc_id: str,
  available_zones: typing.List[str] = None,
  cool_down_time: typing.Union[int, float] = None,
  desire_instance_number: typing.Union[int, float] = None,
  health_periodic_audit_grace_period: typing.Union[int, float] = None,
  health_periodic_audit_method: str = None,
  health_periodic_audit_time: typing.Union[int, float] = None,
  id: str = None,
  instance_terminate_policy: str = None,
  lbaas_listeners: typing.Union[IResolvable, typing.List[AsGroupV1LbaasListeners]] = None,
  lb_listener_id: str = None,
  max_instance_number: typing.Union[int, float] = None,
  min_instance_number: typing.Union[int, float] = None,
  notifications: typing.List[str] = None,
  region: str = None,
  scaling_configuration_id: str = None,
  security_groups: AsGroupV1SecurityGroups = None,
  tags: typing.Mapping[str] = None,
  timeouts: AsGroupV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.deleteInstances">delete_instances</a></code> | <code>str</code> | Whether to delete instances when they are removed from the AS group. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.deletePublicip">delete_publicip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete_publicip AsGroupV1#delete_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scalingGroupName">scaling_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#vpc_id AsGroupV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.availableZones">available_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#available_zones AsGroupV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.coolDownTime">cool_down_time</a></code> | <code>typing.Union[int, float]</code> | The cooling duration, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.desireInstanceNumber">desire_instance_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.healthPeriodicAuditGracePeriod">health_periodic_audit_grace_period</a></code> | <code>typing.Union[int, float]</code> | The grace period for instance health check, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.healthPeriodicAuditMethod">health_periodic_audit_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.healthPeriodicAuditTime">health_periodic_audit_time</a></code> | <code>typing.Union[int, float]</code> | The health check period for instances, in minutes. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.instanceTerminatePolicy">instance_terminate_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.lbaasListeners">lbaas_listeners</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>]]</code> | lbaas_listeners block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.lbListenerId">lb_listener_id</a></code> | <code>str</code> | The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.maxInstanceNumber">max_instance_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#max_instance_number AsGroupV1#max_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.minInstanceNumber">min_instance_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#min_instance_number AsGroupV1#min_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.notifications">notifications</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#notifications AsGroupV1#notifications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#region AsGroupV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scalingConfigurationId">scaling_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.securityGroups">security_groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | security_groups block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#tags AsGroupV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delete_instances`<sup>Required</sup> <a name="delete_instances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.deleteInstances"></a>

- *Type:* str

Whether to delete instances when they are removed from the AS group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete_instances AsGroupV1#delete_instances}

---

##### `delete_publicip`<sup>Required</sup> <a name="delete_publicip" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.deletePublicip"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete_publicip AsGroupV1#delete_publicip}.

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.networks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#networks AsGroupV1#networks}

---

##### `scaling_group_name`<sup>Required</sup> <a name="scaling_group_name" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scalingGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#vpc_id AsGroupV1#vpc_id}.

---

##### `available_zones`<sup>Optional</sup> <a name="available_zones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.availableZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#available_zones AsGroupV1#available_zones}.

---

##### `cool_down_time`<sup>Optional</sup> <a name="cool_down_time" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.coolDownTime"></a>

- *Type:* typing.Union[int, float]

The cooling duration, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#cool_down_time AsGroupV1#cool_down_time}

---

##### `desire_instance_number`<sup>Optional</sup> <a name="desire_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.desireInstanceNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}.

---

##### `health_periodic_audit_grace_period`<sup>Optional</sup> <a name="health_periodic_audit_grace_period" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.healthPeriodicAuditGracePeriod"></a>

- *Type:* typing.Union[int, float]

The grace period for instance health check, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#health_periodic_audit_grace_period AsGroupV1#health_periodic_audit_grace_period}

---

##### `health_periodic_audit_method`<sup>Optional</sup> <a name="health_periodic_audit_method" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.healthPeriodicAuditMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}.

---

##### `health_periodic_audit_time`<sup>Optional</sup> <a name="health_periodic_audit_time" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.healthPeriodicAuditTime"></a>

- *Type:* typing.Union[int, float]

The health check period for instances, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#health_periodic_audit_time AsGroupV1#health_periodic_audit_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_terminate_policy`<sup>Optional</sup> <a name="instance_terminate_policy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.instanceTerminatePolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}.

---

##### `lbaas_listeners`<sup>Optional</sup> <a name="lbaas_listeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.lbaasListeners"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>]]

lbaas_listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#lbaas_listeners AsGroupV1#lbaas_listeners}

---

##### `lb_listener_id`<sup>Optional</sup> <a name="lb_listener_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.lbListenerId"></a>

- *Type:* str

The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#lb_listener_id AsGroupV1#lb_listener_id}

---

##### `max_instance_number`<sup>Optional</sup> <a name="max_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.maxInstanceNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#max_instance_number AsGroupV1#max_instance_number}.

---

##### `min_instance_number`<sup>Optional</sup> <a name="min_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.minInstanceNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#min_instance_number AsGroupV1#min_instance_number}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.notifications"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#notifications AsGroupV1#notifications}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#region AsGroupV1#region}.

---

##### `scaling_configuration_id`<sup>Optional</sup> <a name="scaling_configuration_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scalingConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.securityGroups"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

security_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#security_groups AsGroupV1#security_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#tags AsGroupV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#timeouts AsGroupV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners">put_lbaas_listeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks">put_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups">put_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetAvailableZones">reset_available_zones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetCoolDownTime">reset_cool_down_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetDesireInstanceNumber">reset_desire_instance_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditGracePeriod">reset_health_periodic_audit_grace_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditMethod">reset_health_periodic_audit_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditTime">reset_health_periodic_audit_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetInstanceTerminatePolicy">reset_instance_terminate_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbaasListeners">reset_lbaas_listeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbListenerId">reset_lb_listener_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMaxInstanceNumber">reset_max_instance_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMinInstanceNumber">reset_min_instance_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetNotifications">reset_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetScalingConfigurationId">reset_scaling_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lbaas_listeners` <a name="put_lbaas_listeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners"></a>

```python
def put_lbaas_listeners(
  value: typing.Union[IResolvable, typing.List[AsGroupV1LbaasListeners]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>]]

---

##### `put_networks` <a name="put_networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks"></a>

```python
def put_networks(
  value: typing.Union[IResolvable, typing.List[AsGroupV1Networks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>]]

---

##### `put_security_groups` <a name="put_security_groups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups"></a>

```python
def put_security_groups(
  id: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#create AsGroupV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete AsGroupV1#delete}.

---

##### `reset_available_zones` <a name="reset_available_zones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetAvailableZones"></a>

```python
def reset_available_zones() -> None
```

##### `reset_cool_down_time` <a name="reset_cool_down_time" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetCoolDownTime"></a>

```python
def reset_cool_down_time() -> None
```

##### `reset_desire_instance_number` <a name="reset_desire_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetDesireInstanceNumber"></a>

```python
def reset_desire_instance_number() -> None
```

##### `reset_health_periodic_audit_grace_period` <a name="reset_health_periodic_audit_grace_period" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditGracePeriod"></a>

```python
def reset_health_periodic_audit_grace_period() -> None
```

##### `reset_health_periodic_audit_method` <a name="reset_health_periodic_audit_method" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditMethod"></a>

```python
def reset_health_periodic_audit_method() -> None
```

##### `reset_health_periodic_audit_time` <a name="reset_health_periodic_audit_time" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditTime"></a>

```python
def reset_health_periodic_audit_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_terminate_policy` <a name="reset_instance_terminate_policy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetInstanceTerminatePolicy"></a>

```python
def reset_instance_terminate_policy() -> None
```

##### `reset_lbaas_listeners` <a name="reset_lbaas_listeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbaasListeners"></a>

```python
def reset_lbaas_listeners() -> None
```

##### `reset_lb_listener_id` <a name="reset_lb_listener_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbListenerId"></a>

```python
def reset_lb_listener_id() -> None
```

##### `reset_max_instance_number` <a name="reset_max_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMaxInstanceNumber"></a>

```python
def reset_max_instance_number() -> None
```

##### `reset_min_instance_number` <a name="reset_min_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMinInstanceNumber"></a>

```python
def reset_min_instance_number() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetNotifications"></a>

```python
def reset_notifications() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scaling_configuration_id` <a name="reset_scaling_configuration_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetScalingConfigurationId"></a>

```python
def reset_scaling_configuration_id() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AsGroupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AsGroupV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AsGroupV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AsGroupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AsGroupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.currentInstanceNumber">current_instance_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instances">instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListeners">lbaas_listeners</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList">AsGroupV1LbaasListenersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList">AsGroupV1NetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroups">security_groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference">AsGroupV1SecurityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference">AsGroupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZonesInput">available_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTimeInput">cool_down_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstancesInput">delete_instances_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicipInput">delete_publicip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumberInput">desire_instance_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriodInput">health_periodic_audit_grace_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethodInput">health_periodic_audit_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTimeInput">health_periodic_audit_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicyInput">instance_terminate_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListenersInput">lbaas_listeners_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerIdInput">lb_listener_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumberInput">max_instance_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumberInput">min_instance_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networksInput">networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notificationsInput">notifications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationIdInput">scaling_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupNameInput">scaling_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroupsInput">security_groups_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZones">available_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTime">cool_down_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstances">delete_instances</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicip">delete_publicip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumber">desire_instance_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriod">health_periodic_audit_grace_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethod">health_periodic_audit_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTime">health_periodic_audit_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicy">instance_terminate_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerId">lb_listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumber">max_instance_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumber">min_instance_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationId">scaling_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupName">scaling_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `current_instance_number`<sup>Required</sup> <a name="current_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.currentInstanceNumber"></a>

```python
current_instance_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lbaas_listeners`<sup>Required</sup> <a name="lbaas_listeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListeners"></a>

```python
lbaas_listeners: AsGroupV1LbaasListenersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList">AsGroupV1LbaasListenersList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networks"></a>

```python
networks: AsGroupV1NetworksList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList">AsGroupV1NetworksList</a>

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroups"></a>

```python
security_groups: AsGroupV1SecurityGroupsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference">AsGroupV1SecurityGroupsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeouts"></a>

```python
timeouts: AsGroupV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference">AsGroupV1TimeoutsOutputReference</a>

---

##### `available_zones_input`<sup>Optional</sup> <a name="available_zones_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZonesInput"></a>

```python
available_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cool_down_time_input`<sup>Optional</sup> <a name="cool_down_time_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTimeInput"></a>

```python
cool_down_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_instances_input`<sup>Optional</sup> <a name="delete_instances_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstancesInput"></a>

```python
delete_instances_input: str
```

- *Type:* str

---

##### `delete_publicip_input`<sup>Optional</sup> <a name="delete_publicip_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicipInput"></a>

```python
delete_publicip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `desire_instance_number_input`<sup>Optional</sup> <a name="desire_instance_number_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumberInput"></a>

```python
desire_instance_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_periodic_audit_grace_period_input`<sup>Optional</sup> <a name="health_periodic_audit_grace_period_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriodInput"></a>

```python
health_periodic_audit_grace_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_periodic_audit_method_input`<sup>Optional</sup> <a name="health_periodic_audit_method_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethodInput"></a>

```python
health_periodic_audit_method_input: str
```

- *Type:* str

---

##### `health_periodic_audit_time_input`<sup>Optional</sup> <a name="health_periodic_audit_time_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTimeInput"></a>

```python
health_periodic_audit_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_terminate_policy_input`<sup>Optional</sup> <a name="instance_terminate_policy_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicyInput"></a>

```python
instance_terminate_policy_input: str
```

- *Type:* str

---

##### `lbaas_listeners_input`<sup>Optional</sup> <a name="lbaas_listeners_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListenersInput"></a>

```python
lbaas_listeners_input: typing.Union[IResolvable, typing.List[AsGroupV1LbaasListeners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>]]

---

##### `lb_listener_id_input`<sup>Optional</sup> <a name="lb_listener_id_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerIdInput"></a>

```python
lb_listener_id_input: str
```

- *Type:* str

---

##### `max_instance_number_input`<sup>Optional</sup> <a name="max_instance_number_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumberInput"></a>

```python
max_instance_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_number_input`<sup>Optional</sup> <a name="min_instance_number_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumberInput"></a>

```python
min_instance_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `networks_input`<sup>Optional</sup> <a name="networks_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networksInput"></a>

```python
networks_input: typing.Union[IResolvable, typing.List[AsGroupV1Networks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>]]

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notificationsInput"></a>

```python
notifications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scaling_configuration_id_input`<sup>Optional</sup> <a name="scaling_configuration_id_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationIdInput"></a>

```python
scaling_configuration_id_input: str
```

- *Type:* str

---

##### `scaling_group_name_input`<sup>Optional</sup> <a name="scaling_group_name_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupNameInput"></a>

```python
scaling_group_name_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroupsInput"></a>

```python
security_groups_input: AsGroupV1SecurityGroups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AsGroupV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `available_zones`<sup>Required</sup> <a name="available_zones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZones"></a>

```python
available_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cool_down_time`<sup>Required</sup> <a name="cool_down_time" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTime"></a>

```python
cool_down_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_instances`<sup>Required</sup> <a name="delete_instances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstances"></a>

```python
delete_instances: str
```

- *Type:* str

---

##### `delete_publicip`<sup>Required</sup> <a name="delete_publicip" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicip"></a>

```python
delete_publicip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `desire_instance_number`<sup>Required</sup> <a name="desire_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumber"></a>

```python
desire_instance_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_periodic_audit_grace_period`<sup>Required</sup> <a name="health_periodic_audit_grace_period" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriod"></a>

```python
health_periodic_audit_grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_periodic_audit_method`<sup>Required</sup> <a name="health_periodic_audit_method" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethod"></a>

```python
health_periodic_audit_method: str
```

- *Type:* str

---

##### `health_periodic_audit_time`<sup>Required</sup> <a name="health_periodic_audit_time" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTime"></a>

```python
health_periodic_audit_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_terminate_policy`<sup>Required</sup> <a name="instance_terminate_policy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicy"></a>

```python
instance_terminate_policy: str
```

- *Type:* str

---

##### `lb_listener_id`<sup>Required</sup> <a name="lb_listener_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerId"></a>

```python
lb_listener_id: str
```

- *Type:* str

---

##### `max_instance_number`<sup>Required</sup> <a name="max_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumber"></a>

```python
max_instance_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instance_number`<sup>Required</sup> <a name="min_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumber"></a>

```python
min_instance_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `scaling_configuration_id`<sup>Required</sup> <a name="scaling_configuration_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationId"></a>

```python
scaling_configuration_id: str
```

- *Type:* str

---

##### `scaling_group_name`<sup>Required</sup> <a name="scaling_group_name" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupName"></a>

```python
scaling_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AsGroupV1Config <a name="AsGroupV1Config" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delete_instances: str,
  delete_publicip: typing.Union[bool, IResolvable],
  networks: typing.Union[IResolvable, typing.List[AsGroupV1Networks]],
  scaling_group_name: str,
  vpc_id: str,
  available_zones: typing.List[str] = None,
  cool_down_time: typing.Union[int, float] = None,
  desire_instance_number: typing.Union[int, float] = None,
  health_periodic_audit_grace_period: typing.Union[int, float] = None,
  health_periodic_audit_method: str = None,
  health_periodic_audit_time: typing.Union[int, float] = None,
  id: str = None,
  instance_terminate_policy: str = None,
  lbaas_listeners: typing.Union[IResolvable, typing.List[AsGroupV1LbaasListeners]] = None,
  lb_listener_id: str = None,
  max_instance_number: typing.Union[int, float] = None,
  min_instance_number: typing.Union[int, float] = None,
  notifications: typing.List[str] = None,
  region: str = None,
  scaling_configuration_id: str = None,
  security_groups: AsGroupV1SecurityGroups = None,
  tags: typing.Mapping[str] = None,
  timeouts: AsGroupV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deleteInstances">delete_instances</a></code> | <code>str</code> | Whether to delete instances when they are removed from the AS group. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deletePublicip">delete_publicip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete_publicip AsGroupV1#delete_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingGroupName">scaling_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#vpc_id AsGroupV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.availableZones">available_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#available_zones AsGroupV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.coolDownTime">cool_down_time</a></code> | <code>typing.Union[int, float]</code> | The cooling duration, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.desireInstanceNumber">desire_instance_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditGracePeriod">health_periodic_audit_grace_period</a></code> | <code>typing.Union[int, float]</code> | The grace period for instance health check, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditMethod">health_periodic_audit_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditTime">health_periodic_audit_time</a></code> | <code>typing.Union[int, float]</code> | The health check period for instances, in minutes. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.instanceTerminatePolicy">instance_terminate_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbaasListeners">lbaas_listeners</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>]]</code> | lbaas_listeners block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbListenerId">lb_listener_id</a></code> | <code>str</code> | The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.maxInstanceNumber">max_instance_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#max_instance_number AsGroupV1#max_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.minInstanceNumber">min_instance_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#min_instance_number AsGroupV1#min_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#notifications AsGroupV1#notifications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#region AsGroupV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingConfigurationId">scaling_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.securityGroups">security_groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | security_groups block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#tags AsGroupV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delete_instances`<sup>Required</sup> <a name="delete_instances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deleteInstances"></a>

```python
delete_instances: str
```

- *Type:* str

Whether to delete instances when they are removed from the AS group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete_instances AsGroupV1#delete_instances}

---

##### `delete_publicip`<sup>Required</sup> <a name="delete_publicip" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deletePublicip"></a>

```python
delete_publicip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete_publicip AsGroupV1#delete_publicip}.

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.networks"></a>

```python
networks: typing.Union[IResolvable, typing.List[AsGroupV1Networks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#networks AsGroupV1#networks}

---

##### `scaling_group_name`<sup>Required</sup> <a name="scaling_group_name" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingGroupName"></a>

```python
scaling_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#vpc_id AsGroupV1#vpc_id}.

---

##### `available_zones`<sup>Optional</sup> <a name="available_zones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.availableZones"></a>

```python
available_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#available_zones AsGroupV1#available_zones}.

---

##### `cool_down_time`<sup>Optional</sup> <a name="cool_down_time" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.coolDownTime"></a>

```python
cool_down_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The cooling duration, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#cool_down_time AsGroupV1#cool_down_time}

---

##### `desire_instance_number`<sup>Optional</sup> <a name="desire_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.desireInstanceNumber"></a>

```python
desire_instance_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}.

---

##### `health_periodic_audit_grace_period`<sup>Optional</sup> <a name="health_periodic_audit_grace_period" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditGracePeriod"></a>

```python
health_periodic_audit_grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The grace period for instance health check, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#health_periodic_audit_grace_period AsGroupV1#health_periodic_audit_grace_period}

---

##### `health_periodic_audit_method`<sup>Optional</sup> <a name="health_periodic_audit_method" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditMethod"></a>

```python
health_periodic_audit_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}.

---

##### `health_periodic_audit_time`<sup>Optional</sup> <a name="health_periodic_audit_time" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditTime"></a>

```python
health_periodic_audit_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The health check period for instances, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#health_periodic_audit_time AsGroupV1#health_periodic_audit_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_terminate_policy`<sup>Optional</sup> <a name="instance_terminate_policy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.instanceTerminatePolicy"></a>

```python
instance_terminate_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}.

---

##### `lbaas_listeners`<sup>Optional</sup> <a name="lbaas_listeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbaasListeners"></a>

```python
lbaas_listeners: typing.Union[IResolvable, typing.List[AsGroupV1LbaasListeners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>]]

lbaas_listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#lbaas_listeners AsGroupV1#lbaas_listeners}

---

##### `lb_listener_id`<sup>Optional</sup> <a name="lb_listener_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbListenerId"></a>

```python
lb_listener_id: str
```

- *Type:* str

The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#lb_listener_id AsGroupV1#lb_listener_id}

---

##### `max_instance_number`<sup>Optional</sup> <a name="max_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.maxInstanceNumber"></a>

```python
max_instance_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#max_instance_number AsGroupV1#max_instance_number}.

---

##### `min_instance_number`<sup>Optional</sup> <a name="min_instance_number" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.minInstanceNumber"></a>

```python
min_instance_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#min_instance_number AsGroupV1#min_instance_number}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#notifications AsGroupV1#notifications}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#region AsGroupV1#region}.

---

##### `scaling_configuration_id`<sup>Optional</sup> <a name="scaling_configuration_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingConfigurationId"></a>

```python
scaling_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.securityGroups"></a>

```python
security_groups: AsGroupV1SecurityGroups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

security_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#security_groups AsGroupV1#security_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#tags AsGroupV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.timeouts"></a>

```python
timeouts: AsGroupV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#timeouts AsGroupV1#timeouts}

---

### AsGroupV1LbaasListeners <a name="AsGroupV1LbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1LbaasListeners(
  pool_id: str,
  protocol_port: typing.Union[int, float],
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#pool_id AsGroupV1#pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.protocolPort">protocol_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#protocol_port AsGroupV1#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#weight AsGroupV1#weight}. |

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#pool_id AsGroupV1#pool_id}.

---

##### `protocol_port`<sup>Required</sup> <a name="protocol_port" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.protocolPort"></a>

```python
protocol_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#protocol_port AsGroupV1#protocol_port}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#weight AsGroupV1#weight}.

---

### AsGroupV1Networks <a name="AsGroupV1Networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1Networks(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AsGroupV1SecurityGroups <a name="AsGroupV1SecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1SecurityGroups(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AsGroupV1Timeouts <a name="AsGroupV1Timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#create AsGroupV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete AsGroupV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#create AsGroupV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/as_group_v1#delete AsGroupV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsGroupV1LbaasListenersList <a name="AsGroupV1LbaasListenersList" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1LbaasListenersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AsGroupV1LbaasListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AsGroupV1LbaasListeners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>]]

---


### AsGroupV1LbaasListenersOutputReference <a name="AsGroupV1LbaasListenersOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1LbaasListenersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolIdInput">pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPortInput">protocol_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPort">protocol_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pool_id_input`<sup>Optional</sup> <a name="pool_id_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolIdInput"></a>

```python
pool_id_input: str
```

- *Type:* str

---

##### `protocol_port_input`<sup>Optional</sup> <a name="protocol_port_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPortInput"></a>

```python
protocol_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `protocol_port`<sup>Required</sup> <a name="protocol_port" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPort"></a>

```python
protocol_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AsGroupV1LbaasListeners]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>]

---


### AsGroupV1NetworksList <a name="AsGroupV1NetworksList" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1NetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AsGroupV1NetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AsGroupV1Networks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>]]

---


### AsGroupV1NetworksOutputReference <a name="AsGroupV1NetworksOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1NetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AsGroupV1Networks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>]

---


### AsGroupV1SecurityGroupsOutputReference <a name="AsGroupV1SecurityGroupsOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1SecurityGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.internalValue"></a>

```python
internal_value: AsGroupV1SecurityGroups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---


### AsGroupV1TimeoutsOutputReference <a name="AsGroupV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import as_group_v1

asGroupV1.AsGroupV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AsGroupV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>]

---



