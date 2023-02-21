# `asPolicyV1` Submodule <a name="`asPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.asPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsPolicyV1 <a name="AsPolicyV1" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1 opentelekomcloud_as_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/aspolicyv1"

aspolicyv1.NewAsPolicyV1(scope Construct, id *string, config AsPolicyV1Config) AsPolicyV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config">AsPolicyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config">AsPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScalingPolicyAction">PutScalingPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy">PutScheduledPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetAlarmId">ResetAlarmId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetCoolDownTime">ResetCoolDownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetScalingPolicyAction">ResetScalingPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetScheduledPolicy">ResetScheduledPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutScalingPolicyAction` <a name="PutScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScalingPolicyAction"></a>

```go
func PutScalingPolicyAction(value AsPolicyV1ScalingPolicyAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScalingPolicyAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a>

---

##### `PutScheduledPolicy` <a name="PutScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy"></a>

```go
func PutScheduledPolicy(value AsPolicyV1ScheduledPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.putScheduledPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a>

---

##### `ResetAlarmId` <a name="ResetAlarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetAlarmId"></a>

```go
func ResetAlarmId()
```

##### `ResetCoolDownTime` <a name="ResetCoolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetCoolDownTime"></a>

```go
func ResetCoolDownTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScalingPolicyAction` <a name="ResetScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetScalingPolicyAction"></a>

```go
func ResetScalingPolicyAction()
```

##### `ResetScheduledPolicy` <a name="ResetScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.resetScheduledPolicy"></a>

```go
func ResetScheduledPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/aspolicyv1"

aspolicyv1.AsPolicyV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/aspolicyv1"

aspolicyv1.AsPolicyV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/aspolicyv1"

aspolicyv1.AsPolicyV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyAction">ScalingPolicyAction</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference">AsPolicyV1ScalingPolicyActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scheduledPolicy">ScheduledPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference">AsPolicyV1ScheduledPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.alarmIdInput">AlarmIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.coolDownTimeInput">CoolDownTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingGroupIdInput">ScalingGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyActionInput">ScalingPolicyActionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyNameInput">ScalingPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyTypeInput">ScalingPolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scheduledPolicyInput">ScheduledPolicyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.alarmId">AlarmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.coolDownTime">CoolDownTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingGroupId">ScalingGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyName">ScalingPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyType">ScalingPolicyType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScalingPolicyAction`<sup>Required</sup> <a name="ScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyAction"></a>

```go
func ScalingPolicyAction() AsPolicyV1ScalingPolicyActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference">AsPolicyV1ScalingPolicyActionOutputReference</a>

---

##### `ScheduledPolicy`<sup>Required</sup> <a name="ScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scheduledPolicy"></a>

```go
func ScheduledPolicy() AsPolicyV1ScheduledPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference">AsPolicyV1ScheduledPolicyOutputReference</a>

---

##### `AlarmIdInput`<sup>Optional</sup> <a name="AlarmIdInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.alarmIdInput"></a>

```go
func AlarmIdInput() *string
```

- *Type:* *string

---

##### `CoolDownTimeInput`<sup>Optional</sup> <a name="CoolDownTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.coolDownTimeInput"></a>

```go
func CoolDownTimeInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ScalingGroupIdInput`<sup>Optional</sup> <a name="ScalingGroupIdInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingGroupIdInput"></a>

```go
func ScalingGroupIdInput() *string
```

- *Type:* *string

---

##### `ScalingPolicyActionInput`<sup>Optional</sup> <a name="ScalingPolicyActionInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyActionInput"></a>

```go
func ScalingPolicyActionInput() AsPolicyV1ScalingPolicyAction
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a>

---

##### `ScalingPolicyNameInput`<sup>Optional</sup> <a name="ScalingPolicyNameInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyNameInput"></a>

```go
func ScalingPolicyNameInput() *string
```

- *Type:* *string

---

##### `ScalingPolicyTypeInput`<sup>Optional</sup> <a name="ScalingPolicyTypeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyTypeInput"></a>

```go
func ScalingPolicyTypeInput() *string
```

- *Type:* *string

---

##### `ScheduledPolicyInput`<sup>Optional</sup> <a name="ScheduledPolicyInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scheduledPolicyInput"></a>

```go
func ScheduledPolicyInput() AsPolicyV1ScheduledPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a>

---

##### `AlarmId`<sup>Required</sup> <a name="AlarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.alarmId"></a>

```go
func AlarmId() *string
```

- *Type:* *string

---

##### `CoolDownTime`<sup>Required</sup> <a name="CoolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.coolDownTime"></a>

```go
func CoolDownTime() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ScalingGroupId`<sup>Required</sup> <a name="ScalingGroupId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingGroupId"></a>

```go
func ScalingGroupId() *string
```

- *Type:* *string

---

##### `ScalingPolicyName`<sup>Required</sup> <a name="ScalingPolicyName" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyName"></a>

```go
func ScalingPolicyName() *string
```

- *Type:* *string

---

##### `ScalingPolicyType`<sup>Required</sup> <a name="ScalingPolicyType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.scalingPolicyType"></a>

```go
func ScalingPolicyType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AsPolicyV1Config <a name="AsPolicyV1Config" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/aspolicyv1"

&aspolicyv1.AsPolicyV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ScalingGroupId: *string,
	ScalingPolicyName: *string,
	ScalingPolicyType: *string,
	AlarmId: *string,
	CoolDownTime: *f64,
	Id: *string,
	Region: *string,
	ScalingPolicyAction: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction,
	ScheduledPolicy: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingGroupId">ScalingGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_group_id AsPolicyV1#scaling_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyName">ScalingPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_name AsPolicyV1#scaling_policy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyType">ScalingPolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_type AsPolicyV1#scaling_policy_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.alarmId">AlarmId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#alarm_id AsPolicyV1#alarm_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.coolDownTime">CoolDownTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#cool_down_time AsPolicyV1#cool_down_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#id AsPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#region AsPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyAction">ScalingPolicyAction</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a></code> | scaling_policy_action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scheduledPolicy">ScheduledPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a></code> | scheduled_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScalingGroupId`<sup>Required</sup> <a name="ScalingGroupId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingGroupId"></a>

```go
ScalingGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_group_id AsPolicyV1#scaling_group_id}.

---

##### `ScalingPolicyName`<sup>Required</sup> <a name="ScalingPolicyName" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyName"></a>

```go
ScalingPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_name AsPolicyV1#scaling_policy_name}.

---

##### `ScalingPolicyType`<sup>Required</sup> <a name="ScalingPolicyType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyType"></a>

```go
ScalingPolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_type AsPolicyV1#scaling_policy_type}.

---

##### `AlarmId`<sup>Optional</sup> <a name="AlarmId" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.alarmId"></a>

```go
AlarmId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#alarm_id AsPolicyV1#alarm_id}.

---

##### `CoolDownTime`<sup>Optional</sup> <a name="CoolDownTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.coolDownTime"></a>

```go
CoolDownTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#cool_down_time AsPolicyV1#cool_down_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#id AsPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#region AsPolicyV1#region}.

---

##### `ScalingPolicyAction`<sup>Optional</sup> <a name="ScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scalingPolicyAction"></a>

```go
ScalingPolicyAction AsPolicyV1ScalingPolicyAction
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a>

scaling_policy_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scaling_policy_action AsPolicyV1#scaling_policy_action}

---

##### `ScheduledPolicy`<sup>Optional</sup> <a name="ScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1Config.property.scheduledPolicy"></a>

```go
ScheduledPolicy AsPolicyV1ScheduledPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a>

scheduled_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#scheduled_policy AsPolicyV1#scheduled_policy}

---

### AsPolicyV1ScalingPolicyAction <a name="AsPolicyV1ScalingPolicyAction" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/aspolicyv1"

&aspolicyv1.AsPolicyV1ScalingPolicyAction {
	InstanceNumber: *f64,
	Operation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.property.instanceNumber">InstanceNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#instance_number AsPolicyV1#instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.property.operation">Operation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#operation AsPolicyV1#operation}. |

---

##### `InstanceNumber`<sup>Optional</sup> <a name="InstanceNumber" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.property.instanceNumber"></a>

```go
InstanceNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#instance_number AsPolicyV1#instance_number}.

---

##### `Operation`<sup>Optional</sup> <a name="Operation" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction.property.operation"></a>

```go
Operation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#operation AsPolicyV1#operation}.

---

### AsPolicyV1ScheduledPolicy <a name="AsPolicyV1ScheduledPolicy" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/aspolicyv1"

&aspolicyv1.AsPolicyV1ScheduledPolicy {
	LaunchTime: *string,
	EndTime: *string,
	RecurrenceType: *string,
	RecurrenceValue: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.launchTime">LaunchTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#launch_time AsPolicyV1#launch_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.endTime">EndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#end_time AsPolicyV1#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.recurrenceType">RecurrenceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#recurrence_type AsPolicyV1#recurrence_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.recurrenceValue">RecurrenceValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#recurrence_value AsPolicyV1#recurrence_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#start_time AsPolicyV1#start_time}. |

---

##### `LaunchTime`<sup>Required</sup> <a name="LaunchTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.launchTime"></a>

```go
LaunchTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#launch_time AsPolicyV1#launch_time}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#end_time AsPolicyV1#end_time}.

---

##### `RecurrenceType`<sup>Optional</sup> <a name="RecurrenceType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.recurrenceType"></a>

```go
RecurrenceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#recurrence_type AsPolicyV1#recurrence_type}.

---

##### `RecurrenceValue`<sup>Optional</sup> <a name="RecurrenceValue" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.recurrenceValue"></a>

```go
RecurrenceValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#recurrence_value AsPolicyV1#recurrence_value}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_policy_v1#start_time AsPolicyV1#start_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsPolicyV1ScalingPolicyActionOutputReference <a name="AsPolicyV1ScalingPolicyActionOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/aspolicyv1"

aspolicyv1.NewAsPolicyV1ScalingPolicyActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AsPolicyV1ScalingPolicyActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resetInstanceNumber">ResetInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resetOperation">ResetOperation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceNumber` <a name="ResetInstanceNumber" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resetInstanceNumber"></a>

```go
func ResetInstanceNumber()
```

##### `ResetOperation` <a name="ResetOperation" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.resetOperation"></a>

```go
func ResetOperation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.instanceNumberInput">InstanceNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.operationInput">OperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.instanceNumber">InstanceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceNumberInput`<sup>Optional</sup> <a name="InstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.instanceNumberInput"></a>

```go
func InstanceNumberInput() *f64
```

- *Type:* *f64

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.operationInput"></a>

```go
func OperationInput() *string
```

- *Type:* *string

---

##### `InstanceNumber`<sup>Required</sup> <a name="InstanceNumber" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.instanceNumber"></a>

```go
func InstanceNumber() *f64
```

- *Type:* *f64

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyActionOutputReference.property.internalValue"></a>

```go
func InternalValue() AsPolicyV1ScalingPolicyAction
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScalingPolicyAction">AsPolicyV1ScalingPolicyAction</a>

---


### AsPolicyV1ScheduledPolicyOutputReference <a name="AsPolicyV1ScheduledPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/aspolicyv1"

aspolicyv1.NewAsPolicyV1ScheduledPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AsPolicyV1ScheduledPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetRecurrenceType">ResetRecurrenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetRecurrenceValue">ResetRecurrenceValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetRecurrenceType` <a name="ResetRecurrenceType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetRecurrenceType"></a>

```go
func ResetRecurrenceType()
```

##### `ResetRecurrenceValue` <a name="ResetRecurrenceValue" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetRecurrenceValue"></a>

```go
func ResetRecurrenceValue()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.launchTimeInput">LaunchTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceTypeInput">RecurrenceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceValueInput">RecurrenceValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.launchTime">LaunchTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceType">RecurrenceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceValue">RecurrenceValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `LaunchTimeInput`<sup>Optional</sup> <a name="LaunchTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.launchTimeInput"></a>

```go
func LaunchTimeInput() *string
```

- *Type:* *string

---

##### `RecurrenceTypeInput`<sup>Optional</sup> <a name="RecurrenceTypeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceTypeInput"></a>

```go
func RecurrenceTypeInput() *string
```

- *Type:* *string

---

##### `RecurrenceValueInput`<sup>Optional</sup> <a name="RecurrenceValueInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceValueInput"></a>

```go
func RecurrenceValueInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `LaunchTime`<sup>Required</sup> <a name="LaunchTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.launchTime"></a>

```go
func LaunchTime() *string
```

- *Type:* *string

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceType"></a>

```go
func RecurrenceType() *string
```

- *Type:* *string

---

##### `RecurrenceValue`<sup>Required</sup> <a name="RecurrenceValue" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.recurrenceValue"></a>

```go
func RecurrenceValue() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() AsPolicyV1ScheduledPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asPolicyV1.AsPolicyV1ScheduledPolicy">AsPolicyV1ScheduledPolicy</a>

---



