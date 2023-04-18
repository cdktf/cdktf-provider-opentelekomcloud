# `opentelekomcloud_swr_organization_permissions_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_swr_organization_permissions_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2).

# `swrOrganizationPermissionsV2` Submodule <a name="`swrOrganizationPermissionsV2` Submodule" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SwrOrganizationPermissionsV2 <a name="SwrOrganizationPermissionsV2" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2 opentelekomcloud_swr_organization_permissions_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v6/swrorganizationpermissionsv2"

swrorganizationpermissionsv2.NewSwrOrganizationPermissionsV2(scope Construct, id *string, config SwrOrganizationPermissionsV2Config) SwrOrganizationPermissionsV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config">SwrOrganizationPermissionsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config">SwrOrganizationPermissionsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.putTimeouts"></a>

```go
func PutTimeouts(value SwrOrganizationPermissionsV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts">SwrOrganizationPermissionsV2Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v6/swrorganizationpermissionsv2"

swrorganizationpermissionsv2.SwrOrganizationPermissionsV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v6/swrorganizationpermissionsv2"

swrorganizationpermissionsv2.SwrOrganizationPermissionsV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v6/swrorganizationpermissionsv2"

swrorganizationpermissionsv2.SwrOrganizationPermissionsV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference">SwrOrganizationPermissionsV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.authInput">AuthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.auth">Auth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.timeouts"></a>

```go
func Timeouts() SwrOrganizationPermissionsV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference">SwrOrganizationPermissionsV2TimeoutsOutputReference</a>

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.authInput"></a>

```go
func AuthInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.auth"></a>

```go
func Auth() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SwrOrganizationPermissionsV2Config <a name="SwrOrganizationPermissionsV2Config" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v6/swrorganizationpermissionsv2"

&swrorganizationpermissionsv2.SwrOrganizationPermissionsV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Auth: *f64,
	Organization: *string,
	UserId: *string,
	Username: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v6.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.auth">Auth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#auth SwrOrganizationPermissionsV2#auth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#organization SwrOrganizationPermissionsV2#organization}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#user_id SwrOrganizationPermissionsV2#user_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#username SwrOrganizationPermissionsV2#username}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#id SwrOrganizationPermissionsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts">SwrOrganizationPermissionsV2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.auth"></a>

```go
Auth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#auth SwrOrganizationPermissionsV2#auth}.

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#organization SwrOrganizationPermissionsV2#organization}.

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#user_id SwrOrganizationPermissionsV2#user_id}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#username SwrOrganizationPermissionsV2#username}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#id SwrOrganizationPermissionsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Config.property.timeouts"></a>

```go
Timeouts SwrOrganizationPermissionsV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts">SwrOrganizationPermissionsV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#timeouts SwrOrganizationPermissionsV2#timeouts}

---

### SwrOrganizationPermissionsV2Timeouts <a name="SwrOrganizationPermissionsV2Timeouts" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v6/swrorganizationpermissionsv2"

&swrorganizationpermissionsv2.SwrOrganizationPermissionsV2Timeouts {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#default SwrOrganizationPermissionsV2#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2Timeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/swr_organization_permissions_v2#default SwrOrganizationPermissionsV2#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### SwrOrganizationPermissionsV2TimeoutsOutputReference <a name="SwrOrganizationPermissionsV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v6/swrorganizationpermissionsv2"

swrorganizationpermissionsv2.NewSwrOrganizationPermissionsV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SwrOrganizationPermissionsV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.swrOrganizationPermissionsV2.SwrOrganizationPermissionsV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



