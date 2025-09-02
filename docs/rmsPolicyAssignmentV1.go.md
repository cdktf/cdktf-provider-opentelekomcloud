# `rmsPolicyAssignmentV1` Submodule <a name="`rmsPolicyAssignmentV1` Submodule" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RmsPolicyAssignmentV1 <a name="RmsPolicyAssignmentV1" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1 opentelekomcloud_rms_policy_assignment_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/rmspolicyassignmentv1"

rmspolicyassignmentv1.NewRmsPolicyAssignmentV1(scope Construct, id *string, config RmsPolicyAssignmentV1Config) RmsPolicyAssignmentV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config">RmsPolicyAssignmentV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config">RmsPolicyAssignmentV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putCustomPolicy">PutCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter">PutPolicyFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetCustomPolicy">ResetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPolicyDefinitionId">ResetPolicyDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPolicyFilter">ResetPolicyFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomPolicy` <a name="PutCustomPolicy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putCustomPolicy"></a>

```go
func PutCustomPolicy(value RmsPolicyAssignmentV1CustomPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a>

---

##### `PutPolicyFilter` <a name="PutPolicyFilter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter"></a>

```go
func PutPolicyFilter(value RmsPolicyAssignmentV1PolicyFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putPolicyFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putTimeouts"></a>

```go
func PutTimeouts(value RmsPolicyAssignmentV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a>

---

##### `ResetCustomPolicy` <a name="ResetCustomPolicy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetCustomPolicy"></a>

```go
func ResetCustomPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetId"></a>

```go
func ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetPolicyDefinitionId` <a name="ResetPolicyDefinitionId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPolicyDefinitionId"></a>

```go
func ResetPolicyDefinitionId()
```

##### `ResetPolicyFilter` <a name="ResetPolicyFilter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetPolicyFilter"></a>

```go
func ResetPolicyFilter()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RmsPolicyAssignmentV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/rmspolicyassignmentv1"

rmspolicyassignmentv1.RmsPolicyAssignmentV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/rmspolicyassignmentv1"

rmspolicyassignmentv1.RmsPolicyAssignmentV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/rmspolicyassignmentv1"

rmspolicyassignmentv1.RmsPolicyAssignmentV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/rmspolicyassignmentv1"

rmspolicyassignmentv1.RmsPolicyAssignmentV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RmsPolicyAssignmentV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RmsPolicyAssignmentV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RmsPolicyAssignmentV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RmsPolicyAssignmentV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference">RmsPolicyAssignmentV1CustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyFilter">PolicyFilter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference">RmsPolicyAssignmentV1PolicyFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference">RmsPolicyAssignmentV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.customPolicyInput">CustomPolicyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.periodInput">PeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyDefinitionIdInput">PolicyDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyFilterInput">PolicyFilterInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomPolicy`<sup>Required</sup> <a name="CustomPolicy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.customPolicy"></a>

```go
func CustomPolicy() RmsPolicyAssignmentV1CustomPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference">RmsPolicyAssignmentV1CustomPolicyOutputReference</a>

---

##### `PolicyFilter`<sup>Required</sup> <a name="PolicyFilter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyFilter"></a>

```go
func PolicyFilter() RmsPolicyAssignmentV1PolicyFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference">RmsPolicyAssignmentV1PolicyFilterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.timeouts"></a>

```go
func Timeouts() RmsPolicyAssignmentV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference">RmsPolicyAssignmentV1TimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `CustomPolicyInput`<sup>Optional</sup> <a name="CustomPolicyInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.customPolicyInput"></a>

```go
func CustomPolicyInput() RmsPolicyAssignmentV1CustomPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.periodInput"></a>

```go
func PeriodInput() *string
```

- *Type:* *string

---

##### `PolicyDefinitionIdInput`<sup>Optional</sup> <a name="PolicyDefinitionIdInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyDefinitionIdInput"></a>

```go
func PolicyDefinitionIdInput() *string
```

- *Type:* *string

---

##### `PolicyFilterInput`<sup>Optional</sup> <a name="PolicyFilterInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyFilterInput"></a>

```go
func PolicyFilterInput() RmsPolicyAssignmentV1PolicyFilter
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.policyDefinitionId"></a>

```go
func PolicyDefinitionId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RmsPolicyAssignmentV1Config <a name="RmsPolicyAssignmentV1Config" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/rmspolicyassignmentv1"

&rmspolicyassignmentv1.RmsPolicyAssignmentV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CustomPolicy: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy,
	Description: *string,
	Id: *string,
	Parameters: *map[string]*string,
	Period: *string,
	PolicyDefinitionId: *string,
	PolicyFilter: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter,
	Status: *string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#name RmsPolicyAssignmentV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#description RmsPolicyAssignmentV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#id RmsPolicyAssignmentV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#parameters RmsPolicyAssignmentV1#parameters}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.period">Period</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#period RmsPolicyAssignmentV1#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#policy_definition_id RmsPolicyAssignmentV1#policy_definition_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.policyFilter">PolicyFilter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a></code> | policy_filter block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#status RmsPolicyAssignmentV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#name RmsPolicyAssignmentV1#name}.

---

##### `CustomPolicy`<sup>Optional</sup> <a name="CustomPolicy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.customPolicy"></a>

```go
CustomPolicy RmsPolicyAssignmentV1CustomPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#custom_policy RmsPolicyAssignmentV1#custom_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#description RmsPolicyAssignmentV1#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#id RmsPolicyAssignmentV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#parameters RmsPolicyAssignmentV1#parameters}.

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.period"></a>

```go
Period *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#period RmsPolicyAssignmentV1#period}.

---

##### `PolicyDefinitionId`<sup>Optional</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.policyDefinitionId"></a>

```go
PolicyDefinitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#policy_definition_id RmsPolicyAssignmentV1#policy_definition_id}.

---

##### `PolicyFilter`<sup>Optional</sup> <a name="PolicyFilter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.policyFilter"></a>

```go
PolicyFilter RmsPolicyAssignmentV1PolicyFilter
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a>

policy_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#policy_filter RmsPolicyAssignmentV1#policy_filter}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#status RmsPolicyAssignmentV1#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Config.property.timeouts"></a>

```go
Timeouts RmsPolicyAssignmentV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts">RmsPolicyAssignmentV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#timeouts RmsPolicyAssignmentV1#timeouts}

---

### RmsPolicyAssignmentV1CustomPolicy <a name="RmsPolicyAssignmentV1CustomPolicy" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/rmspolicyassignmentv1"

&rmspolicyassignmentv1.RmsPolicyAssignmentV1CustomPolicy {
	AuthType: *string,
	FunctionUrn: *string,
	AuthValue: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.authType">AuthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#auth_type RmsPolicyAssignmentV1#auth_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.functionUrn">FunctionUrn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#function_urn RmsPolicyAssignmentV1#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.authValue">AuthValue</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#auth_value RmsPolicyAssignmentV1#auth_value}. |

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#auth_type RmsPolicyAssignmentV1#auth_type}.

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.functionUrn"></a>

```go
FunctionUrn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#function_urn RmsPolicyAssignmentV1#function_urn}.

---

##### `AuthValue`<sup>Optional</sup> <a name="AuthValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy.property.authValue"></a>

```go
AuthValue *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#auth_value RmsPolicyAssignmentV1#auth_value}.

---

### RmsPolicyAssignmentV1PolicyFilter <a name="RmsPolicyAssignmentV1PolicyFilter" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/rmspolicyassignmentv1"

&rmspolicyassignmentv1.RmsPolicyAssignmentV1PolicyFilter {
	Region: *string,
	ResourceId: *string,
	ResourceProvider: *string,
	ResourceType: *string,
	TagKey: *string,
	TagValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#region RmsPolicyAssignmentV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#resource_id RmsPolicyAssignmentV1#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceProvider">ResourceProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#resource_provider RmsPolicyAssignmentV1#resource_provider}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#resource_type RmsPolicyAssignmentV1#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#tag_key RmsPolicyAssignmentV1#tag_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.tagValue">TagValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#tag_value RmsPolicyAssignmentV1#tag_value}. |

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#region RmsPolicyAssignmentV1#region}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#resource_id RmsPolicyAssignmentV1#resource_id}.

---

##### `ResourceProvider`<sup>Optional</sup> <a name="ResourceProvider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceProvider"></a>

```go
ResourceProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#resource_provider RmsPolicyAssignmentV1#resource_provider}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#resource_type RmsPolicyAssignmentV1#resource_type}.

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#tag_key RmsPolicyAssignmentV1#tag_key}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter.property.tagValue"></a>

```go
TagValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#tag_value RmsPolicyAssignmentV1#tag_value}.

---

### RmsPolicyAssignmentV1Timeouts <a name="RmsPolicyAssignmentV1Timeouts" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/rmspolicyassignmentv1"

&rmspolicyassignmentv1.RmsPolicyAssignmentV1Timeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#create RmsPolicyAssignmentV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#update RmsPolicyAssignmentV1#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#create RmsPolicyAssignmentV1#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/rms_policy_assignment_v1#update RmsPolicyAssignmentV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RmsPolicyAssignmentV1CustomPolicyOutputReference <a name="RmsPolicyAssignmentV1CustomPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/rmspolicyassignmentv1"

rmspolicyassignmentv1.NewRmsPolicyAssignmentV1CustomPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RmsPolicyAssignmentV1CustomPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resetAuthValue">ResetAuthValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthValue` <a name="ResetAuthValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.resetAuthValue"></a>

```go
func ResetAuthValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authValueInput">AuthValueInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.functionUrnInput">FunctionUrnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authValue">AuthValue</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.functionUrn">FunctionUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `AuthValueInput`<sup>Optional</sup> <a name="AuthValueInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authValueInput"></a>

```go
func AuthValueInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FunctionUrnInput`<sup>Optional</sup> <a name="FunctionUrnInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.functionUrnInput"></a>

```go
func FunctionUrnInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `AuthValue`<sup>Required</sup> <a name="AuthValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.authValue"></a>

```go
func AuthValue() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FunctionUrn`<sup>Required</sup> <a name="FunctionUrn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.functionUrn"></a>

```go
func FunctionUrn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() RmsPolicyAssignmentV1CustomPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1CustomPolicy">RmsPolicyAssignmentV1CustomPolicy</a>

---


### RmsPolicyAssignmentV1PolicyFilterOutputReference <a name="RmsPolicyAssignmentV1PolicyFilterOutputReference" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/rmspolicyassignmentv1"

rmspolicyassignmentv1.NewRmsPolicyAssignmentV1PolicyFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RmsPolicyAssignmentV1PolicyFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceProvider">ResetResourceProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetResourceProvider` <a name="ResetResourceProvider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceProvider"></a>

```go
func ResetResourceProvider()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetTagKey"></a>

```go
func ResetTagKey()
```

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.resetTagValue"></a>

```go
func ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceProviderInput">ResourceProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceProvider">ResourceProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceProviderInput`<sup>Optional</sup> <a name="ResourceProviderInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceProviderInput"></a>

```go
func ResourceProviderInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagValueInput"></a>

```go
func TagValueInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceProvider`<sup>Required</sup> <a name="ResourceProvider" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceProvider"></a>

```go
func ResourceProvider() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() RmsPolicyAssignmentV1PolicyFilter
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1PolicyFilter">RmsPolicyAssignmentV1PolicyFilter</a>

---


### RmsPolicyAssignmentV1TimeoutsOutputReference <a name="RmsPolicyAssignmentV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/rmspolicyassignmentv1"

rmspolicyassignmentv1.NewRmsPolicyAssignmentV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RmsPolicyAssignmentV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rmsPolicyAssignmentV1.RmsPolicyAssignmentV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



