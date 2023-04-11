# `computeSecgroupV2` Submodule <a name="`computeSecgroupV2` Submodule" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecgroupV2 <a name="ComputeSecgroupV2" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2 opentelekomcloud_compute_secgroup_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computesecgroupv2"

computesecgroupv2.NewComputeSecgroupV2(scope Construct, id *string, config ComputeSecgroupV2Config) ComputeSecgroupV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config">ComputeSecgroupV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config">ComputeSecgroupV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.putTimeouts"></a>

```go
func PutTimeouts(value ComputeSecgroupV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Timeouts">ComputeSecgroupV2Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.resetRule"></a>

```go
func ResetRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computesecgroupv2"

computesecgroupv2.ComputeSecgroupV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computesecgroupv2"

computesecgroupv2.ComputeSecgroupV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computesecgroupv2"

computesecgroupv2.ComputeSecgroupV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList">ComputeSecgroupV2RuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference">ComputeSecgroupV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.rule"></a>

```go
func Rule() ComputeSecgroupV2RuleList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList">ComputeSecgroupV2RuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.timeouts"></a>

```go
func Timeouts() ComputeSecgroupV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference">ComputeSecgroupV2TimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecgroupV2Config <a name="ComputeSecgroupV2Config" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computesecgroupv2"

&computesecgroupv2.ComputeSecgroupV2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Name: *string,
	Id: *string,
	Region: *string,
	Rule: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#description ComputeSecgroupV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#name ComputeSecgroupV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#id ComputeSecgroupV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#region ComputeSecgroupV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Timeouts">ComputeSecgroupV2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#description ComputeSecgroupV2#description}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#name ComputeSecgroupV2#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#id ComputeSecgroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#region ComputeSecgroupV2#region}.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#rule ComputeSecgroupV2#rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Config.property.timeouts"></a>

```go
Timeouts ComputeSecgroupV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Timeouts">ComputeSecgroupV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#timeouts ComputeSecgroupV2#timeouts}

---

### ComputeSecgroupV2Rule <a name="ComputeSecgroupV2Rule" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computesecgroupv2"

&computesecgroupv2.ComputeSecgroupV2Rule {
	FromPort: *f64,
	IpProtocol: *string,
	ToPort: *f64,
	Cidr: *string,
	FromGroupId: *string,
	SelfAttribute: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#from_port ComputeSecgroupV2#from_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#ip_protocol ComputeSecgroupV2#ip_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#to_port ComputeSecgroupV2#to_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.property.cidr">Cidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#cidr ComputeSecgroupV2#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.property.fromGroupId">FromGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#from_group_id ComputeSecgroupV2#from_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.property.selfAttribute">SelfAttribute</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#self ComputeSecgroupV2#self}. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#from_port ComputeSecgroupV2#from_port}.

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#ip_protocol ComputeSecgroupV2#ip_protocol}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#to_port ComputeSecgroupV2#to_port}.

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#cidr ComputeSecgroupV2#cidr}.

---

##### `FromGroupId`<sup>Optional</sup> <a name="FromGroupId" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.property.fromGroupId"></a>

```go
FromGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#from_group_id ComputeSecgroupV2#from_group_id}.

---

##### `SelfAttribute`<sup>Optional</sup> <a name="SelfAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Rule.property.selfAttribute"></a>

```go
SelfAttribute interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#self ComputeSecgroupV2#self}.

---

### ComputeSecgroupV2Timeouts <a name="ComputeSecgroupV2Timeouts" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computesecgroupv2"

&computesecgroupv2.ComputeSecgroupV2Timeouts {
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#delete ComputeSecgroupV2#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_secgroup_v2#delete ComputeSecgroupV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSecgroupV2RuleList <a name="ComputeSecgroupV2RuleList" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computesecgroupv2"

computesecgroupv2.NewComputeSecgroupV2RuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecgroupV2RuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.get"></a>

```go
func Get(index *f64) ComputeSecgroupV2RuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecgroupV2RuleOutputReference <a name="ComputeSecgroupV2RuleOutputReference" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computesecgroupv2"

computesecgroupv2.NewComputeSecgroupV2RuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecgroupV2RuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.resetFromGroupId">ResetFromGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.resetSelfAttribute">ResetSelfAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.resetCidr"></a>

```go
func ResetCidr()
```

##### `ResetFromGroupId` <a name="ResetFromGroupId" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.resetFromGroupId"></a>

```go
func ResetFromGroupId()
```

##### `ResetSelfAttribute` <a name="ResetSelfAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.resetSelfAttribute"></a>

```go
func ResetSelfAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.fromGroupIdInput">FromGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.selfAttributeInput">SelfAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.fromGroupId">FromGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.selfAttribute">SelfAttribute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `FromGroupIdInput`<sup>Optional</sup> <a name="FromGroupIdInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.fromGroupIdInput"></a>

```go
func FromGroupIdInput() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `SelfAttributeInput`<sup>Optional</sup> <a name="SelfAttributeInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.selfAttributeInput"></a>

```go
func SelfAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `FromGroupId`<sup>Required</sup> <a name="FromGroupId" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.fromGroupId"></a>

```go
func FromGroupId() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.selfAttribute"></a>

```go
func SelfAttribute() interface{}
```

- *Type:* interface{}

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2RuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecgroupV2TimeoutsOutputReference <a name="ComputeSecgroupV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computesecgroupv2"

computesecgroupv2.NewComputeSecgroupV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecgroupV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeSecgroupV2.ComputeSecgroupV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



